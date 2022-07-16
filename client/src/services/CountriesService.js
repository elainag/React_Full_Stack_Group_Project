const baseURL = 'http://localhost:9000/api/countries/'

const CountriesService = {
    getCountries() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    postCountry(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    },

    deleteCountries(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }
}

export default CountriesService

