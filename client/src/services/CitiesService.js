const baseURL = 'http://localhost:9000/api/cities/'

const CitiesService = {
    getCities() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    postCity(payload) {

        // console.log('postCity:');
        // console.log(payload);
        // console.log('done');
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })

            .then(res => res.json())
    },

    deleteCity(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}

export default CitiesService