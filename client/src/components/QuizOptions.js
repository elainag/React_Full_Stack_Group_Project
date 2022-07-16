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
            <div className="radio-div" onChange={handleChange}>
                <span className="radio-span">
                    <input className="radio" type="radio" name="choice" value={options[0]}/>
                    <label className="radio-label">{options[0]}</label>
                </span>
                <span className="radio-span">
                    <input className="radio" type="radio" name="choice" value={options[1]}/>
                    <label className="radio-label">{options[1]}</label>
                </span>
                <span className="radio-span">
                    <input className="radio" type="radio" name="choice" value={options[2]}/>
                    <label className="radio-label">{options[2]}</label>
                </span>
                <span className="radio-span">
                    <input className="radio" type="radio" name="choice" value={options[3]}/>
                    <label className="radio-label">{options[3]}</label>
                </span>
            </div>
            <div><input className="quiz-input" type="submit"/></div>
        </form>
    )
}

export default QuizOptions;