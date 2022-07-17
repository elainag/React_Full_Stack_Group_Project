import React, { useState, useEffect } from "react";
import GeoMap from "../components/GeoMap";
import Quiz from "../components/Quiz";


function HomeContainer() {

  const [] = useState([]);

  // useEffect(() => {
  //   getFunctionName();
  // }, []);

  return (
    <>
      <h1>HomeContainer</h1>
      <GeoMap/>
      <Quiz/>
    </>
  )
}

export default HomeContainer;