import React, { useState, useEffect } from "react";
import WorldMap from "../components/WorldMap";
import Quiz from "../components/Quiz";

function HomeContainer() {

  const [] = useState([]);

  return (
    <>
      <h1>HomeContainer</h1>
      <WorldMap />
      <Quiz/>
    </>
  )
}

export default HomeContainer;