import React, { useState, useEffect } from 'react'
import Country from './country.jsx'

const CountryList = ({ searchResults, setSearchResults }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleShow = (country) => {
    setSelectedCountry(country)
  }
  useEffect(() => {
    setSelectedCountry(null)
  }, [searchResults])

  if (searchResults.length >= 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }

  return (
    <div>
      {selectedCountry ? (
        <Country country={selectedCountry} />) 
        : (
        <pre>
            {searchResults.map((country) => (
            <div key={country.index}><div>
                {country.name.common}
                <button onClick={() => handleShow(country)}>show</button>
                </div>
                </div>
            ))}
            </pre>
        )}
        </div>
        )}

export default CountryList
