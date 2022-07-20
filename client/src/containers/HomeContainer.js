import React, { useState, useEffect } from "react";
import GeoMapContainer from "./GeoMapContainer";
import QuizContainer from "./QuizContainer";
import UserService from "../services/UserService";
import User from "../components/User";
import SearchContainer from "./SearchContainer";

function HomeContainer() {

  // const [users, setUsers] = useState([]); // gets all the scores, users from our database
  // const [user, setUser] = useState({});
  // const [quizText, setQuizText] = useState("Welcome back") // a descriptive text top of the quiz component
  // const [session, setSession] = useState({ userLoggedIn: false, userDenied: false })
  // const [score, setScore] = useState(0); // user score
  const [search, setSearch] = useState("") // user input on search form


  // useEffect(() => {
  //   UserService.getUsers()
  //     .then(users => setUsers(users));
  // }, []);

  // function onSelectedUser(userID) {
  //   const selectedUser = users.find(user => user._id === userID);
  //   setUser(selectedUser);
  //   setScore(selectedUser.score);
  // }

  function onSearchedCountry(country) {
    setSearch(country)
  }

  return (
    <>
      <h1>Welcome to Our World</h1>
      <SearchContainer />
      {/* <User
        users={users}
        setUser={setUser}
        setQuizText={setQuizText}

        onSelectedUser={onSelectedUser}
        session={session}
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