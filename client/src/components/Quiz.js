import React, { useEffect, useState } from "react";
import QuizOptions from "./QuizOptions";

const Quiz = () => {
    const [countries, setCountries] = useState([]);
    const [country , setCountry] = useState({});
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [answer, setAnswer] =useState("");
    const [chosen, setChosen] = useState("");
    const [score, setScore] = useState(0);
    const [playButton, setPlayButton] = useState("PLAY")

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
        generateQuestion();
        generateOptions();
    }

    function generateQuestion() {
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
                setPlayButton("Play Again");
            } else {
                setPlayButton("Try Again");
            }
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
            <p>User Score: {score}</p>
            <button onClick={getQuiz}>{playButton}</button>
            <h2>{question}</h2>
            <QuizOptions options={options} submitChosen={submitChosen} setChosen={setChosen}/>
            
        </div>
    )
}

export default Quiz;