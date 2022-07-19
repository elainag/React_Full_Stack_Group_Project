import React, { useState } from "react"
import "../styles/User.css"

const UserLoginForm = ({ users, onSelectedUser }) => {
    const [userEmail, setUserEmail] = useState("");

    const handleEmailChange = (ev) => setUserEmail(ev.target.value);

    function handleSubmit(event) {
        event.preventDefault();
        validateUser(userEmail);
    }

    function validateUser(userEmail) {
        const userEmails = users.map(user => user.email)
        console.log(userEmails);
        if (userEmails.includes(userEmail)) {
            const userFound = users.find(user => user.email === userEmail)
            const userId = userFound._id;
            onSelectedUser(userId);
            console.log("user in database")
        } else {
            console.log("user is not found in database")
        }
    }

    function handleChange(event) {
        const userId = event.target.value;
        onSelectedUser(userId);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Log in with Email
                    <input type="email" id="email" name="email" value={userEmail} required onChange={handleEmailChange} />
                </label>
                <input type="submit" value="Log in" />
            </div>
        </form>
    )
}

export default UserLoginForm;