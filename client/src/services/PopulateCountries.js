import React, { useState, useEffect } from 'react';
import CountriesService from './CountriesService';

const PopulateCountries = () => {

    const [countries, setCountries] = useState([]);


    const getCountries = async () => {
        // const key = null;
        const cName = ' ';
        // const cHref = ' ';
        const countryRes = await fetch("https://api.teleport.org/api/countries/")
        const countryData = await countryRes.json()
        setCountries(countryData['_links']['country:items'])

        for (let i = 0; i < countries.length; i++) {
            const country = {
                cName: countries[i].name,
                cHref: countries[i].href,
                cCode: countries[i].href.slice(50, 52)

            }
            //
            console.log(cName)
            CountriesService.postCountry(country);
        }
    }


    useEffect(() => { getCountries(); }, [])




}

export default PopulateCountries;