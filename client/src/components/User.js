import React from "react"
import "../styles/User.css"

const User = ({ users, onSelectedUser }) => {
    const userOptions = users.map(user => {
        return <option key={user._id} value={user._id}>{user.username}</option>
    })
    
    function handleChange(event) {
        const userId = event.target.value;
        onSelectedUser(userId);
    }

    return (
        <select onChange={handleChange}>
            <option value="">Select User</option>
            {userOptions}
        </select>
    )
    //     <select onChange={handleChange}>
    //         {userOptions}
    //     </select>
    // )
}

export default User;