import React from "react";

const QuizOptions = ({options}) => {

    return (
        <form>
            <legend>choices</legend>
            <span><input type="radio" name="answer" value={options[0]}/>{options[0]}</span>
            <span><input type="radio" name="answer" value={options[1]}/>{options[1]}</span>
            <span><input type="radio" name="answer" value={options[2]}/>{options[2]}</span>
            <span><input type="radio" name="answer" value={options[3]}/>{options[3]}</span>
            <div><input type="submit"/></div>
        </form>
    )
}

export default QuizOptions;