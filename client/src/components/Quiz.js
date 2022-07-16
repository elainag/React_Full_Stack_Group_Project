import React, { useEffect, useState } from "react";

const Quiz = () => {
    const [countries, setCountries] = useState([]);
    const [country , setCountry] = useState({});
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([]);
    const [quiz, setQuiz] = useState({});

    useEffect(() => {getCountries()},[])
    useEffect(() => {getCountry()},[countries])

    function getCountries() {
        fetch("https://restcountries.com/v3.1/all")
        .then(result => result.json())
        .then(data => setCountries(data))
    }

    function getRandomIndex() {
        const min = 0;
        const max = countries.length - 1;
        const index = Math.floor(Math.random() * (max - min) + min);
        return index;
    }

    function getCountry() {
        const index = getRandomIndex();
        setCountry(countries[index])
    }

    function getQuiz() {
        generateQuestion();
        generateOptions();
        console.log(question);
        console.log(options);
    }

    function generateQuestion() {
        setQuestion(`What is the capital city of ${country.name.official}?`)
    }
    function generateOptions() {
        const answer1 = countries[getRandomIndex()].capital[0];
        const answer2 = countries[getRandomIndex()].capital[0];
        const answer3 = countries[getRandomIndex()].capital[0];
        let generatedOptions = [ answer1, answer2, answer3, country.capital[0]]
        setOptions(generatedOptions)
    }


    return (
        <div>
            {/* <button onClick={get}>Get Quiz</button> */}
            {/* <button onClick={getCountries}>Get Countries</button> */}
            <button onClick={getQuiz}>get quiz</button>
        </div>
    )
}

export default Quiz;