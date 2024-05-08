import { useEffect } from 'react'
import axios from 'axios'

const Connection = ({ searchTerm, setSearchResults }) => {
  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
        .then(response => {
          setSearchResults(response.data)
        })  
    }
  }, [searchTerm, setSearchResults])

  return null
}

export default Connection
