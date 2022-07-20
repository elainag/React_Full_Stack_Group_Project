import React from "react";
import "../styles/ScoreBoard.css"

const ScoreBoard = ({ users }) => {
    if (!users) {
        return
    }


    users.sort((a, b) => (a.score < b.score) ? 1 : -1);

    const scoreRows = users.map(user => {
        return (
            <tr key={user._id}>
                <td>{user.score} points</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
            </tr>
        )
    })

    return (
        <article className="score-board">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Score</th>
                        <th>Username</th>
                        <th>User Email</th>
                    </tr>
                </thead>
                <tbody>
                    {scoreRows}
                </tbody>
            </table>
        </article>
    )
}

export default ScoreBoard;