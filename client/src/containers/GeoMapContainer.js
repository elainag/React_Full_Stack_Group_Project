import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import "../styles/GeoMapContainer.css"

function GeoMapContainer() {
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const [content, setContent] = useState("")
    const [selectedCountry, setSelectedCountry] = useState("")

    return (
        <div className="GeoMap">
            <h1>Map Demo</h1>
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
                        }}
                        onClick={() => {
                            const NAME  = geo.id;
                            setSelectedCountry(`${NAME}`);
                        }}
                        onMouseLeave={() => {
                            setContent("");
                        }}
                        style={{
                        default:{
                            outline: "none"
                        },
                        hover: {
                            fill: "#ff33a7",
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
        </div>
    )
}

export default GeoMapContainer;