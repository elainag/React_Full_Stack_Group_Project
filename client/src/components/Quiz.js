import React, { useEffect, useState } from "react";

const Quiz = () => {
    const [countries, setCountries] = useState([]);
    const [quiz, setQuiz] = useState({});

    useEffect(() => {getCountries()},[])

    function getCountries() {
        fetch("https://restcountries.com/v3.1/all")
        .then(result => result.json())
        .then(data => setCountries(data))
        console.log(countries)
    }

    function getRandomIndex() {
        const min = 0;
        const max = countries.length - 1;
        const index = Math.floor(Math.random() * (max - min) + min);
        console.log(index);
        return index;
    }

    function getCountry() {
        
    }

    return (
        <div>
            {/* <button onClick={get}>Get Quiz</button> */}
            {/* <button onClick={getCountries}>Get Countries</button> */}
            <button onClick={getRandomIndex}>random index</button>
        </div>
    )
}

export default Quiz;