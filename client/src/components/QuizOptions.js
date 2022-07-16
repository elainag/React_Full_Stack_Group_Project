import React from "react";

const QuizOptions = ({options, submitChosen, setChosen}) => {

    function handleChange(event) {
        setChosen(event.target.value);
        console.log(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        submitChosen();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div onChange={handleChange}>
                <input type="radio" name="choice" value={options[0]}/>{options[0]}
                <input type="radio" name="choice" value={options[1]}/>{options[1]}
                <input type="radio" name="choice" value={options[2]}/>{options[2]}
                <input type="radio" name="choice" value={options[3]}/>{options[3]}
            </div>
            <div><input type="submit"/></div>
        </form>
    )
}

export default QuizOptions;