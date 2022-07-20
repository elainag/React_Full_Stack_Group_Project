import React, { useState, useEffect } from 'react';

import CitiesService from './CitiesService';
const PopulateCities = () => {

    
    const [areas, setAreas] = useState([]);

    const getAreas = async () => {

        const areaRes = await fetch("https://api.teleport.org/api/urban_areas/")
        const areaData = await areaRes.json()
        setAreas(areaData['_links']['ua:item'])
    }
    useEffect(() => { getAreas(); }, [])

    const getUrbanData = async (urbanArea) => {
        const urbanRes = await fetch(urbanArea.cHref)
        const urbanData = await urbanRes.json()
        //console.log('here')
        // console.log(urbanData)
        return (urbanData)
    }
    useEffect(() => { getData() }, [areas])


    const getData = async () => {
        for await (let area of areas) {
            const urbanArea = {
                city: area.name,
                cHref: area.href
            }
            const urbanInfo = await getUrbanData(urbanArea);
            // console.log('info')
            // console.log(urbanInfo);
            urbanArea.country = urbanInfo['_links']['ua:countries'][0].name;
            urbanArea.countryCode = urbanInfo['_links']['ua:countries'][0].href.slice(50, 52);
            //use code to find country
            if (urbanInfo['_links']['ua:admin1-divisions'][0]) {
                urbanArea.region = urbanInfo['_links']['ua:admin1-divisions'][0].name;
            }
            else { urbanArea.region = null }

            urbanArea.picture = urbanInfo['_links']['ua:images'].href;
            urbanArea.salaries = urbanInfo['_links']['ua:salaries'].href;
            urbanArea.QoL = urbanInfo['_links']['ua:scores'].href;
            urbanArea.granuarDetail = urbanInfo['_links']['ua:details'].href;

            CitiesService.postCity(urbanArea)
           

        }
    }
    const getCountryData = async () => { }
    useEffect(() => { getCountryData(); }, [areas])


}
export default PopulateCities;

