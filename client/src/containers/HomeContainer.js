import React, { useState, useEffect } from "react";
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";

function HomeContainer() {

  return (
    <>
      <h1>HomeContainer</h1>
      <GeoMapContainer/>
      <QuizContainer/>
    </>
  )
}

export default HomeContainer;