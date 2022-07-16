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
        console.log(question);
        console.log(options);
    }

    function generateQuestion() {
        setQuestion(`What is the capital city of ${country.name.official}?`)
    }
    function generateOptions() {
        const option1 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const option2 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const option3 = countries[getRandomIndex(0, countries.length-1)].capital[0];
        const index = getRandomIndex(0, 3);
        console.log(index);
        let generatedOptions = [ option1, option2, option3]
        generatedOptions.splice(index, 0, country.capital[0])
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