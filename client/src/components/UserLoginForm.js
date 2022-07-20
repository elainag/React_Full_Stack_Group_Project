import React, { useState } from "react"
import "../styles/User.css"

const UserLoginForm = ({ users, setQuizText, onSelectedUser, setSession }) => {
    const [userEmail, setUserEmail] = useState("");

    const handleEmailChange = (ev) => setUserEmail(ev.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        validateUser(userEmail);
        setUserEmail("");
    }

    function validateUser(userEmail) {
        const userEmails = users.map(user => user.email)
        console.log(userEmails);
        if (userEmails.includes(userEmail)) {
            const userFound = users.find(user => user.email === userEmail)
            const userId = userFound._id;
            onSelectedUser(userId);
            setSession({userLoggedIn: true, userDenied: false});
            setQuizText(`Welcome back ${userFound.username}`)
        } else {
            setSession({userLoggedIn: false, userDenied: true});
        }
    }

    function handleChange(event) {
        const userId = event.target.value;
        onSelectedUser(userId);
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
                <label className="login-label">Log in with Email   </label>
                <input className="input" type="email" id="email" name="email" value={userEmail} required onChange={handleEmailChange} />
                <input className="log-button" type="submit" value="Log in" />
        </form>
    )
}

export default UserLoginForm;