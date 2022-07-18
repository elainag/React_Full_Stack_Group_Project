import React from "react";
import QuizOptions from "./QuizOptions";

const Quiz = ({ quizText, score, getQuiz, playButton, question, gameStatus, options, submitChosen, setChosen}) => {
    return (
        <>
            <p>{quizText}</p>
            <p>Your Score: {score}</p>
            <button className="play-button" onClick={getQuiz}>{playButton}</button>
            <h3>{question}</h3>
            {gameStatus === 1 ? <QuizOptions 
                options={options} 
                submitChosen={submitChosen} 
                setChosen={setChosen}/> : null}
        </>
    )
}

export default Quiz;