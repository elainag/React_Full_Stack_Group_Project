const baseURL = 'http://localhost:9000/api/scores'

const ScoreService = {
    getScores() {
        return fetch(baseURL)
        .then(res => res.json());
    },

    updateScores(score) {
        return fetch(baseURL + score._id, {
            method: 'PUT',
            body: JSON.stringify(score),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json());
    },
}

export default ScoreService;