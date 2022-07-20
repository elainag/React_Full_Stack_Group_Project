import React from "react";
import "../styles/User.css"

const LoginButton = ({ setSession, setUser, setQuizText}) => {

    function handleClick() {
        setUser({});
        setSession({userLoggedIn: false, userDenied: false})
        setQuizText("Welcome Back")
    }
    
    return <button className="logout-button" onClick={handleClick}>Logout</button>
}

export default LoginButton;