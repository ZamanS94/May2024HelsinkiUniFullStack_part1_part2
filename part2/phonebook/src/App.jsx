import { useState } from 'react'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import _ from 'lodash'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: Math.floor(Math.random() * (100 - persons.length)) + persons.length + 1
    }
    const doesExist = persons.find(person => _.isEqual(person, personObject))

    if(doesExist){
      window.alert(`${doesExist.name} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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