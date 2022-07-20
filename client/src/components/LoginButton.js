import React from "react";
import UserLoginForm from "./UserLoginForm";
import { Link } from "react-router-dom";

const LoginButton = ({ setSession, setUser, setQuizText}) => {

    function handleClick() {
        setUser({});
        setSession({userLoggedIn: false, userDenied: false})
        setQuizText("Welcome Back")
    }
    
    return <button onClick={handleClick}>Logout</button>
}

export default LoginButton;