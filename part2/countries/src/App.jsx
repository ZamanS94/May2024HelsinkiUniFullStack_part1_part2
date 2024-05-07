import { useState, useEffect } from 'react'
import axios from 'axios'


const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then(response => {
          setSearchResults(response.data)
        })  
    }
  }, [searchTerm])

  if(searchResults.length >= 10){
    return (
      <div>
        find countries <input value={searchTerm} onChange={handleChange}/>
        <p>Too many matches, specify another filter </p>
      </div>
    )
  }
  else if(searchResults.length == 1){
    return (
    <div>find countries <input value={searchTerm} onChange={handleChange}/>
    <pre>
      {searchResults.map((country) => (
      <div key={country.index}>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>
        <p>Languages:</p>
        <ul>
          {Object.values(country.languages).map((language, index) => (<li key={index}>{language}</li>
        ))}
        </ul>
        <div> {console.log(Object.values(country.flags)[0])}
        <img src={Object.values(country.flags)[0]}/>
        </div>
        </div>
      ))}
      </pre>
      </div>
      )
    }
    else {
      return (
      <div>
        find countries <input value={searchTerm} onChange={handleChange} />
        <pre>
          {searchResults.map((country) => (
          <div key={country.index}>
            <p>{country.name.common}</p>
            </div>
          ))}
          </pre>
          </div>
          )}}

export default App;
