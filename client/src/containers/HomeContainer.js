import React, { useState, useEffect } from "react";
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";
import User from "../components/User";

function HomeContainer() {


  return (
    <>
      <h1>HomeContainer</h1>
      <User/> 
      <GeoMapContainer/>
      <QuizContainer/>
    </>
  )
}

export default HomeContainer;