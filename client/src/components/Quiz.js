import React from "react";
import QuizOptions from "./QuizOptions";
import "../styles/Quiz.css"


const Quiz = ({ quizText, score, getQuiz, playButton, question, gameStatus, options, submitChosen, setChosen, getHistoryQuiz}) => {

    return (
        <>
            <h2 className="quiz-text">{quizText}</h2>
            {/* show the following line only if a user is logged in */}
            {gameStatus === 1 ? <p className="score-text">Your Score: {score}</p> : null}
            {/* <p>Your Score: {score}</p> */}
            <button className="play-button" onClick={getQuiz}>{playButton}</button>
            <button className="play-history-button" onClick={getHistoryQuiz}>Play From Your Quiz History</button>
            <div className="quiz-div">
                <h3>{question}</h3>
                <hr></hr>
                {gameStatus === 1 ? <QuizOptions
                    options={options}
                    submitChosen={submitChosen}
                    setChosen={setChosen} /> : null}
            </div>
        </>
    )
}

export default Quiz;