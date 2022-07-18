import React, { useEffect, useState } from "react";
import ScoreService from "../services/ScoreService";
import QuizOptions from "../components/QuizOptions";
import Quiz from "../components/Quiz";
import "../styles/Quiz.css"

const QuizContainer = () => {
    const [scores, setScores] = useState([]); // gets all the scores, users from our database
    const [user, setUser] = useState("charlie05");
    const [countries, setCountries] = useState([]); //gets all the country objects
    const [country , setCountry] = useState({}); //sets the country selected for quiz
    const [question, setQuestion] = useState(""); // the question
    const [options, setOptions] = useState([]); // multiple choices for answer
    const [answer, setAnswer] =useState(""); // the correct answer
    const [chosen, setChosen] = useState(""); // the radio button chosen by user
    const [score, setScore] = useState(0); // user score
    const [playButton, setPlayButton] = useState("PLAY") // this button generates the quiz
    const [quizText, setQuizText] = useState("Welcome back") // a descriptive text top of the quiz component
    const [gameStatus, setGameStatus] = useState(0); // this defines the items display on the quiz component

    useEffect(() => {getCountries()},[])
    useEffect(() => {getCountry()},[countries])

    //gets users and scores from database
    useEffect(() => {
        ScoreService.getScores()
        .then(scores => setScores(scores));
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
        const index = getRandomIndex(0, countries.length-1);
        setCountry(countries[index])
    }

    // generates the quiz
    function getQuiz() {
        setGameStatus(1);
        generateQuestion();
        generateOptions();
    }

    // generates the question, changes texts on the play button
    function generateQuestion() {
        setQuizText("");
        getCountry();
        setPlayButton("Play");
        setQuestion(`What is the capital city of ${country.name.official}?`)
    }

    // generates 3 random answers in an array 
    // then pushes the correct answer into a random index in the array
    function generateOptions() {
        const option1 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const option2 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const option3 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const index = getRandomIndex(0, 3);
        console.log(index);
        let generatedOptions = [ option1, option2, option3];
        generatedOptions.splice(index, 0, country.capital[0]);
        setOptions(generatedOptions);
        setAnswer(country.capital[0]);
    }

    // submits the chosen answer of the user
    // updates the quiz text after win or lose
    // in win case adds points to the score
    // clears the quiz component
    function submitChosen() {
        let points = 0;
        if (answer !== "") {
            if (answer === chosen) {
                points = score + 10;
                setScore(points);
                setQuizText("Correct Answer!")
                setPlayButton("Play Again");
            } else {
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

    return (
        <div className="quiz-box">
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
            />
        </div>
    )
}

export default QuizContainer;