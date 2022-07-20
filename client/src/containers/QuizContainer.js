import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import Quiz from "../components/Quiz";
import ScoreBoard from "../components/ScoreBoard";

import User from '../components/User'
import "../styles/Quiz.css"

const QuizContainer = () => {

    const [countries, setCountries] = useState([]); //gets all the country objects
    const [country, setCountry] = useState({}); //sets the country selected for quiz
    const [question, setQuestion] = useState(""); // the question
    const [options, setOptions] = useState([]); // multiple choices for answer
    const [answer, setAnswer] = useState(""); // the correct answer
    const [chosen, setChosen] = useState(""); // the radio button chosen by user
    const [playButton, setPlayButton] = useState("PLAY") // this button generates the quiz

    const [session, setSession] = useState({ userLoggedIn: false, userDenied: false })
    const [users, setUsers] = useState([]); // gets all the scores, users from our database
    const [user, setUser] = useState({});
    const [score, setScore] = useState(0); // user score
    const [quizText, setQuizText] = useState("Welcome back") // a descriptive text top of the quiz component




    const [gameStatus, setGameStatus] = useState(0); // this defines the items display on the quiz component

    useEffect(() => { getCountries() }, [])
    useEffect(() => { getCountry() }, [countries])
    useEffect(() => { submitChosen() }, [])
    useEffect(() => {
        UserService.getUsers()
            .then(users => setUsers(users));
    }, []);



    // gets all the country objects from API
    function getCountries() {
        fetch("https://restcountries.com/v3.1/all")
            .then(result => result.json())
            .then(data => setCountries(data))
    }

    // generates a random index
    function getRandomIndex(min, max) {
        const index = Math.floor(Math.random() * (max - min) + min);
        return index;
    }

    // gets a random country from countries with a random index
    function getCountry() {
        const index = getRandomIndex(0, countries.length - 1);
        setCountry(countries[index])
    }

    // generates the random quiz
    function getQuiz() {
        setGameStatus(1);
        const randomSession = {userLoggedIn: true, userDenied: false, gameMode: "random"};
        setSession(randomSession);
        generateQuestion();
        generateOptions();
    }

    // generates quiz from user QA history
    function getHistoryQuiz() {
        setGameStatus(1);
        const historySession = {userLoggedIn: true, userDenied: false, gameMode: "history"};
        setSession(historySession);
        const index = getRandomIndex(0, user.QA_history.length - 1);
        setQuestion(user.QA_history[index].question);
        setAnswer(user.QA_history[index].answer)
        setOptions(user.QA_history[index].options)
    }

    // generates the question, changes texts on the play button
    function generateQuestion() {
        setQuizText("");
        getCountry();
        setPlayButton("Play");
        setQuestion(`What is the capital city of ${country.name.common}?`)
    }

    // generates 3 random answers in an array 
    // then pushes the correct answer into a random index in the array
    function generateOptions() {
        const option1 = countries[getRandomIndex(0, countries.length - 1)].capital[0];
        const option2 = countries[getRandomIndex(0, countries.length - 1)].capital[0];
        const option3 = countries[getRandomIndex(0, countries.length - 1)].capital[0];
        const index = getRandomIndex(0, 3);


        let generatedOptions = [ option1, option2, option3];

        generatedOptions.splice(index, 0, country.capital[0]);
        setOptions(generatedOptions);
        setAnswer(country.capital[0]);
    }

    // submits the chosen answer of the user
    // updates the quiz text after win or lose
    // in win case adds points to the score
    // in lost case adds QA to the user QA_history
    // clears the quiz component
    // if gameMode is history deletes the QA from user history in case of win
    function submitChosen() {
        let points = 0;
        if (answer !== "") {
            if (answer === chosen) {
                let winner = user;
                winner.score += 10;
                if (session.gameMode === "history") {
                    const index = winner.QA_history.findIndex(qa => qa.answer === answer);
                    winner.QA_history.splice(index, 1)
                }
                setUser(winner);
                setScore(winner.score);
                UserService.updateUsers(user);
                setQuizText("Correct Answer!");
                setPlayButton("Play Again");
            } else {
                let loser = user;
                let QA = {
                    category: "capitals",
                    question: question,
                    answer: answer
                }

                const userAnswers = user.QA_history.map(item => item.answer)

                if (userAnswers.includes(answer)) { } else {
                    loser.QA_history.push(QA);
                    setUser(loser);
                }
                setQuizText("Sorry wrong answer.")
                setPlayButton("Try Again");
            }
            setGameStatus(0);
            clearQuiz();
        }
    }

    // clears quiz component
    function clearQuiz() {
        setQuestion("");
        setOptions([]);
        setAnswer("");
        setChosen("");
    }

    function onSelectedUser(userID) {
        const selectedUser = users.find(user => user._id === userID);
        setUser(selectedUser);
        setScore(selectedUser.score);
    }


    return (
        <div className="quiz-box">
            <User
                users={users}
                setUser={setUser}
                setQuizText={setQuizText}
                onSelectedUser={onSelectedUser}
                session={session}
                setSession={setSession} />

            <Quiz
                quizText={quizText}
                score={score}
                getQuiz={getQuiz}
                playButton={playButton}
                question={question}
                gameStatus={gameStatus}
                options={options}
                submitChosen={submitChosen}
                setChosen={setChosen}
                getHistoryQuiz={getHistoryQuiz}
            />


            <ScoreBoard users={users}/>
            {/* <UserQAHistory /> */}

        </div>
    )
}

export default QuizContainer;