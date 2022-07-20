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
        <form className="register-form" onSubmit={handleSubmit}>
          <h3>Register with email</h3>
          <div className="group">
            <label className="form-label" htmlFor="username">Select your username</label>
            <input 
              className="input"
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              required 
              onChange={handleUserNameChange}
            />
          </div>
          <div className="group">
            <label className="form-label" htmlFor="email">Enter your email</label>
            <input 
              className="input"
              type="email" 
              id="email" 
              name="email" 
              value={email} 
              required 
              onChange={handleEmailChange}
            />
          </div>
    
          <input className="log-button" type="submit" name="submit" value="Register" />
        </form>
    )
}

export default UserRegisterForm;