import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import "./GeoMap.css"

function GeoMap() {
    const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
    const [content, setContent] = useState("")
    
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
                        onMouseLeave={() => {
                            setContent("");
                        }}
                        style={{
                        hover: {
                            fill: "#ff33a7",
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

export default GeoMap;