import React, { useState, useEffect } from "react";
import SearchCountry from "../components/SearchCountry";

function SearchContainer() {
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState("")

  useEffect(() => { searchCountries() },[search])

  function searchCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then(result => result.json())
      .then(data => setCountries(data))
  }

  return (

    <div>
      <input placeholder="Search Country" onChange={event => setCountries(event.target.value)} />
      {/* <SearchCountry countries={countries} search={search} /> */}
    </div>

  )

}

export default SearchContainer;