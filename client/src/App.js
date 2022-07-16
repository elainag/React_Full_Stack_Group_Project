import './App.css';

import PopulateCountries from './services/PopulateCountries';

import HomeContainer from './Pages/HomeContainer';


function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <PopulateCountries />
      <HomeContainer />

    </div>
  );
}

export default App;
