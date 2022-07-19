import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomeContainer() {

  return (
    <div>
      <Router>

        <h1>HomeContainer</h1>
        <Header />
        <Routes>
          {/* <Route exact path="/HomeContainer"><Home /></Route> */}
        </Routes>

      </Router>
      <GeoMapContainer />
      <QuizContainer />
      <Footer />
    </div>
  )
}

export default HomeContainer;