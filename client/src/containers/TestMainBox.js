import React from "react";
import Question from "../components/Question";

// container to test components in development
const TestMainBox = () => {
 return (
    <div className="test-container">
        <h1>Test Container</h1>
        <Question/>
    </div>
 )
}

export default TestMainBox;