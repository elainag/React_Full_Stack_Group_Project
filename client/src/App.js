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

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/HomeContainer" />;
}


function App() {

  return (
    <div className="App">
      <Router>
        <Menu />
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route exact path='/quiz' element={<QuizContainer />} />
          {/* <Route exact path='/' element={<PrivateRoute />}> */}
          {/* </Route> */}
          {/* <Route exact path='/GeoMapContainer' element={<PrivateRoute />}>
            <Route exact path='/GeoMapContainer' element={<GeoMapContainer />} />
          </Route> */}
          {/* <Route exact path='/quiz' element={<PrivateRoute />}> */}
          {/* </Route> */}
          {/* <Route exact path='/SearchContainer' element={<PrivateRoute />}>
            <Route exact path='/SearchContainer' element={<SearchContainer />} />
          </Route> */}

          {/* <Route exact path="/" component={HomeContainer}>HomeContainer </Route> */}
          {/* <Route exact path="/HomeContainer" component={HomeContainer}>Home</Route>
          <Route exact path="/GeoMapContainer" component={GeoMapContainer}>Geo</Route> */}
          {/* <Route exact path="/QuizContainer" component={QuizContainer}>Quiz</Route>
          <Route exact path="/SearchContainer" component={SearchContainer}>Search</Route> */}
        </Routes>
      </Router>
      {/* <HomeContainer className="home-container"></HomeContainer> */}
      {/* <QuizContainer></QuizContainer>
      <GeoMapContainer></GeoMapContainer> */}
      <Footer />
    </div>
  );
}

export default App;
