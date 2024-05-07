import { useState, useEffect } from 'react'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import _ from 'lodash'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * (100 - persons.length)) + persons.length + 1
    }
    const doesExist = persons.find(person => person.name === newName && person.number === newNumber)

    if(doesExist){
      window.alert(`${doesExist.name} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else{
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handlePersonSearch= (event) => {
    setSearch(event.target.value)
  }

  const searchResult = persons.filter(person => 
    person.name.toLocaleLowerCase().includes(newSearch.toLowerCase()))

    return (
      <div>
        <h2>Phonebook</h2>
        <Filter newSearch={newSearch} handlePersonSearch={handlePersonSearch} />
        <div>
          {searchResult.map(person => <Person key={person.id} person={person} />)}
        </div>
        <h3>Add a new</h3>
        <PersonForm 
          newName={newName}
          newNumber={newNumber}
          handleNameChange={handleNameChange}
          handleNumberChange={handleNumberChange}
          addPerson={addPerson}
        />
        <h3>Numbers</h3>
        {persons.map(person => <Person key={person.id} person={person} />)}
      </div>
    )
}

export default App
