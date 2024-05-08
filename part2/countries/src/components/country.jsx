import React from 'react'

const Country = ({ country }) => {
  return (
    <div key = {country.index}>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <p>Languages:</p>
      <ul>
        {Object.values(country.languages).map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
      <img src={Object.values(country.flags)[0]} alt="Country Flag"/>
    </div>
  )
}

export default Country
