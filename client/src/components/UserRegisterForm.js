import React, { useState } from "react"
import "../styles/User.css"

const UserRegisterForm = ({ addUser }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

    const handleUserNameChange = (ev) => setUsername(ev.target.value);
    const handleEmailChange = (ev) => setEmail(ev.target.value);

    const handleSubmit = ev => {
        ev.preventDefault();
        addUser({
          username: username,
          email: email,
        });
        setUsername("");
        setEmail("");
    }

    return (
        <form onSubmit={handleSubmit}>
          <h1>Register with email</h1>
          <div className="group">
            <label htmlFor="username">Select your username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              required 
              onChange={handleUserNameChange}
            />
          </div>
          <div className="group">
            <label htmlFor="email">Enter your email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              required 
              onChange={handleEmailChange}
            />
          </div>
    
          <input type="submit" name="submit" value="Register" />
        </form>
    )
}

export default UserRegisterForm;