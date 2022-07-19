import React from "react";
import QuizOptions from "./QuizOptions";

const Quiz = ({ quizText, score, getQuiz, playButton, question, gameStatus, options, submitChosen, setChosen, getHistoryQuiz}) => {
    return (
        <>
            <p>{quizText}</p>
            <p>Your Score: {score}</p>
            <button className="play-button" onClick={getQuiz}>{playButton}</button>
            <button className="play-button" onClick={getHistoryQuiz}>Play From Your Quiz History</button>
            <h3>{question}</h3>
            {gameStatus === 1 ? <QuizOptions 
                options={options} 
                submitChosen={submitChosen} 
                setChosen={setChosen}/> : null}
        </>
    )
}

export default Quiz;