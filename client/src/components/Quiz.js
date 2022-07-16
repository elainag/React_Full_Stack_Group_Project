import React, { useEffect, useState } from "react";
import QuizOptions from "./QuizOptions";
import "../styles/Quiz.css"

const Quiz = () => {
    const [countries, setCountries] = useState([]);
    const [country , setCountry] = useState({});
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] =useState("");
    const [chosen, setChosen] = useState("");
    const [score, setScore] = useState(0);
    const [playButton, setPlayButton] = useState("PLAY")
    const [quizText, setQuizText] = useState("Welcome back")
    const [gameStatus, setGameStatus] = useState(0);

    useEffect(() => {getCountries()},[])
    useEffect(() => {getCountry()},[countries])

    function getCountries() {
        fetch("https://restcountries.com/v3.1/all")
        .then(result => result.json())
        .then(data => setCountries(data))
    }

    function getRandomIndex(min, max) {
        const index = Math.floor(Math.random() * (max - min) + min);
        return index;
    }

    function getCountry() {
        const index = getRandomIndex(0, countries.length-1);
        setCountry(countries[index])
    }

    function getQuiz() {
        setGameStatus(1);
        generateQuestion();
        generateOptions();
    }

    function generateQuestion() {
        setQuizText("");
        getCountry();
        setPlayButton("Play");
        setQuestion(`What is the capital city of ${country.name.official}?`)
    }
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

    function clearQuiz() {
        setQuestion("");
        setOptions([]);
        setAnswer("");
        setChosen("");
    }

    return (
        <div className="quiz-box">
            <p>{quizText}</p>
            <p>Your Score: {score}</p>
            <button className="play-button" onClick={getQuiz}>{playButton}</button>
            <h2>{question}</h2>
            {gameStatus === 1 ? <QuizOptions options={options} submitChosen={submitChosen} setChosen={setChosen}/> : null}
        </div>
    )
}

export default Quiz;