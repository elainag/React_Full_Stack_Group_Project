const baseURL = 'http://localhost:9000/api/wiki/'

export const wikifyCountry = (countryInput) => {
    return fetch(baseURL + countryInput)
        .then(res => res.json())
}

export const findAnthem = (country) => {
    return fetch(baseURL + country + '/anthem')
        .then(res => res.json())
}

export const findLanguages = (country) => {
    return fetch(baseURL + country + '/languages')
        .then(res => res.json())
}

export const findLanguageSample = (language) => {
    return fetch(baseURL + 'language' + language)
        .then(res => res.json())
}