import React from "react";
import UserLoginForm from "./UserLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import "../styles/User.css";

const User = ({ users, onSelectedUser, addUser , session, setSession}) => {

    return (
        <div>
            { session.userLoggedIn === false ? 
            <UserLoginForm users={users} onSelectedUser={onSelectedUser} setSession={setSession}/> 
            : null }
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