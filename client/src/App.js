import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, Link } from "react-router-dom"

import './App.css';
import HomeContainer from './containers/HomeContainer';
import GeoMapContainer from './containers/GeoMapContainer';
import QuizContainer from './containers/QuizContainer';
import SearchContainer from './containers/SearchContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';


import PopulateCountries from './services/PopulateCountries';
import PopulateCities from './services/PopulateCities';


function App() {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/quiz' element={<QuizContainer />} />
        </Routes>
      </Router>

      <HomeContainer className="home-container"></HomeContainer>
      {/* <QuizContainer></QuizContainer>
      <GeoMapContainer></GeoMapContainer> */}
        {/* <PopulateCountries /> */}
      <PopulateCities />

      <Footer />
    </div>
  );
}

export default App;
