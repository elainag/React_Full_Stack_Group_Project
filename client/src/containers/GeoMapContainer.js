import React, { useState , useEffect } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import "../styles/GeoMapContainer.css"
import Country from "../components/Country";
import {wikifyCountry, findAnthem, findCountrySummary} from "../services/WikipediaService";



function GeoMapContainer() {
    const [isLoaded, setIsLoaded] = useState(false)
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const [content, setContent] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")

    const [wikifiedCountry, setWikifiedCountry] = useState("")
    const [anthem, setAnthem] = useState("");
    const [summary, setSummary] = useState("")

    const [showContainer, setShowContainer] = useState(false)
    useEffect(()=>{
        if(!isLoaded){
            return
        }
        wikifyCountry(selectedCountry).then((wikified)=>{
        setWikifiedCountry(wikified)
        })
        setAnthem('')
        
    }, [selectedCountry]);

    useEffect(()=>{
        if(!isLoaded){
            return
        }
        findAnthem(wikifiedCountry).then((anthemFound)=>{
        setAnthem(anthemFound);
        })
        findCountrySummary(wikifiedCountry).then((summaryFound)=>{
            setSummary(summaryFound);
        })
    }, [wikifiedCountry]);

    return (
        <div className="GeoMap">
            <ReactTooltip>{content}</ReactTooltip>
            <div className="geography-div">
            <ComposableMap data-tip="">
                <ZoomableGroup zoom={1}>
                <Geographies geography={geoUrl}>
                    {({ geographies }) => 
                    geographies.map((geo) => (
                    <Geography
                    className="geography"
                        key={geo.rsmKey}
                        value={geo.properties.name}
                        geography={geo}
                        onMouseEnter={() => {
                            const NAME  = geo.properties.name;
                            setContent(`${NAME}`);
                            setIsLoaded(true);
                        }}
                        onClick={() => {
                            const NAME  = geo.properties.name;
                            setSelectedCountry(`${NAME}`);
                            setShowContainer(true);
                        }}
                        onMouseLeave={() => {
                            setContent("");
                        }}
                        style={{
                        default:{
                            outline: "none"
                        },
                        hover: {
                            fill: "#7209b7",
                            outline: "none"
                        },
                        activated: {
                            fill: "#eca146",
                            outline: "none" 
                        }
                        }}
                    />
                    ))}
                </Geographies>
                </ZoomableGroup>
            </ComposableMap>
            </div>
            { showContainer ? <Country country={selectedCountry} anthem={anthem} summary={summary} setShowContainer={setShowContainer}/>: null }

        </div>
    )
}

export default GeoMapContainer;