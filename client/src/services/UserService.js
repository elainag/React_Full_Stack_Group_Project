const baseURL = 'http://localhost:9000/api/scores'

const UserService = {
    getUsers() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    updateUsers(user) {
        return fetch(baseURL + user._id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },
}

export default UserService;