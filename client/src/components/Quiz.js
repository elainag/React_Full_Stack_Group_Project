import React from "react";
import QuizOptions from "./QuizOptions";


const Quiz = ({ quizText, score, getQuiz, playButton, question, gameStatus, options, submitChosen, setChosen, getHistoryQuiz}) => {

    return (
        <>
            <p>{quizText}</p>
            {/* show the following line only if a user is logged in */}
            {gameStatus === 1 ? <p>Your Score: {score}</p> : null}
            {/* <p>Your Score: {score}</p> */}
            <button className="play-button" onClick={getQuiz}>{playButton}</button>
            <button className="play-button" onClick={getHistoryQuiz}>Play From Your Quiz History</button>
            <h3>{question}</h3>
            {gameStatus === 1 ? <QuizOptions
                options={options}
                submitChosen={submitChosen}
                setChosen={setChosen} /> : null}
        </>
    )
}

export default Quiz;