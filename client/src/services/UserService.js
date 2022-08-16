const baseURL = 'http://localhost:9000/api/users/'

const UserService = {
    getUsers() {
        return fetch(baseURL)
            .then(res => res.json());
    },

    updateUsers(user) {
        const updateURL = baseURL + user._id;
        delete user._id
        return fetch(updateURL, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    addUser(user) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    },
}

export default UserService;