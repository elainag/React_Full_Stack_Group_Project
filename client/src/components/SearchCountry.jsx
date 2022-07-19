import React from "react";
import CountryData from "./CountryData";

const SearchCountry = ({ countries, search }) => {
  const countryInfo = countries.filter((country, key) => {
    if (search === "") {
      return <CountryData key={key} value={country.country.id} country={country} />

    } else if (country.name.toLowerCase().includes(search.toLowerCase())) {
      return search;
    }
  }).map((country, key) => {
    return <CountryData key={key} value={country.country.id} country={country} />
  })

  return (
    <div>
      {countryInfo}
    </div>
  )
}

export default SearchCountry;