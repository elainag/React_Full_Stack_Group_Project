import React, { useState, useEffect } from "react";
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";
import UserService from "../services/UserService";
import User from "../components/User";
import SearchContainer from "./SearchContainer";

// import CountriesService from './CountriesService';

import CountriesService from "../services/CountriesService";

function HomeContainer() {

  const [users, setUsers] = useState([]); // gets all the scores, users from our database
  const [user, setUser] = useState({}); // defines the logged in user
  const [quizText, setQuizText] = useState("Welcome back") // a descriptive text top of the quiz component
  const [session, setSession] = useState({ userLoggedIn: false, userDenied: false, gameMode: "random" })
  //  All session properties defines which components will display
  //  and how those components behave
  const [score, setScore] = useState(0); // user score

  useEffect(() => {
    UserService.getUsers()
      .then(users => setUsers(users));
  }, []);

  function onSelectedUser(userID) {
    const selectedUser = users.find(user => user._id === userID);
    setUser(selectedUser);
    setScore(selectedUser.score);

  }


  // const PopulateCountries = () => {

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    // const key = null;
    const cName = ' ';
    // const cHref = ' ';
    const countryRes = await fetch("https://api.teleport.org/api/countries/")
    const countryData = await countryRes.json()
    setCountries(countryData['_links']['country:items'])

    for (let i = 0; i < countries.length; i++) {
      const country = {
        cName: countries[i].name,
        cHref: countries[i].href,
        cCode: countries[i].href.slice(50, 52)

      }

      console.log(cName)
      CountriesService.postCountry(country);
    }
  }

  useEffect(() => { getCountries(); }, [])




  // }
  return (
    <>
      <h1>HomeContainer</h1>
      <SearchContainer />
      {/* <User
        users={users}
        setUser={setUser}
        setQuizText={setQuizText}

        onSelectedUser={onSelectedUser}
        session={session}
        setSession={setSession} />
  
    
        setSession={setSession} /> */}
      {/* <QuizContainer
        user={user}
        setUser={setUser}
        users={users}


        setUsers={setUsers}
        quizText={quizText}
        setQuizText={setQuizText}
        score={score}
        setScore={setScore}

      /> */}
      <GeoMapContainer />


    </>
  )
}

export default HomeContainer;