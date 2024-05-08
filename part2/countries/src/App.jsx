import { useState } from 'react'
import Connection from './services/countryServices.js'
import CountryList from './components/countryList.jsx'
import Country from './components/country.jsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = event => {
    setSearchTerm(event.target.value.toLowerCase())
  }

  return (
    <div>
      <div>
        Find countries <input value={searchTerm} onChange={handleChange} />
      </div>
      <Connection searchTerm={searchTerm} setSearchResults={setSearchResults} />
      {searchResults.length === 1 ? (<Country country={searchResults[0]} />) 
      : (<CountryList searchResults={searchResults} setSearchResults={setSearchResults} />
      )}
    </div>
  )
}

export default App