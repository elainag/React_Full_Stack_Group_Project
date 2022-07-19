import React from "react";
import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import LoginButton from "./LoginButton";
import "../styles/User.css";

const User = ({ setUser, users, setQuizText, onSelectedUser, addUser , session, setSession}) => {

    return (
        <div>
            { session.userLoggedIn === false ? 
            <UserLoginForm users={users} setQuizText={setQuizText} onSelectedUser={onSelectedUser} setSession={setSession}/> 
            : <LoginButton setSession={setSession} setUser={setUser} setQuizText={setQuizText}/> }
            { session.userDenied === true ?
            <UserRegisterForm addUser={addUser}/> 
            : null }
        </div>
    )

    // return (
    //     <>
    //         <UserLoginForm users={users} onSelectedUser={onSelectedUser}/>
    //         <UserRegisterForm addUser={addUser}/>
    //     </>
    // )
}

export default User;