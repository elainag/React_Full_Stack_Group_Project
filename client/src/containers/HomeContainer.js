import React, { useState, useEffect } from "react";
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";
import Header from "../components/Header";

function HomeContainer() {

  return (
    <div>
      <h1>HomeContainer</h1>
      <GeoMapContainer />
      <QuizContainer />
    </div>
  )
}

export default HomeContainer;