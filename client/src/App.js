import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import HomeContainer from './containers/HomeContainer';
// import GeoMapContainer from './containers/GeoMapContainer';
// import QuizContainer from './containers/QuizContainer';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Header />
        <Routes>
          <Route exact path="/HomeContainer">Home</Route>
          <Route exact path="/GeoMapContainer"></Route>
          <Route exact path="/QuizContainer">Quiz</Route>
        </Routes>
      </Router> */}
      <HomeContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
