import React from "react";

const User = ({ users, onSelectedUser }) => {
    const userOptions = users.map(user => {
        return <option key={user._id} value={user._id}>{user.username}</option>
    })
    
    function handleChange(event) {
        const userID = event.target.value;
        onSelectedUser(userID);
    }

    return (
        <select onChange={handleChange}>
            {userOptions}
        </select>
    )
}

export default User;