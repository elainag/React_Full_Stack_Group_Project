import React, { useEffect, useState } from "react";

const Quiz = () => {
    const [quiz, setQuiz] = useState({});

    useEffect(() => {getQuiz()},[])

    function getQuiz() {
        fetch("https://api.api-ninjas.com/v1/trivia?category=", {
            headers: {
                'X-Api-Key': 'Mu9/196xPoZlAapoh0Vc8Q==DllOi1W7I3lXvPvL'
            }
        })
        .then(result => result.json())
        .then(data => setQuiz(data[0]))
        console.log(quiz);
    }

    return <button onClick={getQuiz}>Get Quiz</button>
}

export default Quiz;