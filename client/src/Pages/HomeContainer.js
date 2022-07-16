import React, { useState, useEffect } from "react";
import GeoMap from "../components/GeoMap";


function HomeContainer() {

  const [] = useState([]);

  // useEffect(() => {
  //   getFunctionName();
  // }, []);

  return (
    <>
      <h1>HomeContainer</h1>
      <GeoMap/>
    </>
  )
}

export default HomeContainer;