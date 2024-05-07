import { useState } from 'react'
import Person from './components/Person.jsx'
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
      <form> 
        <div>filter shown with <input value={newSearch} onChange={handlePersonSearch}/></div>
        </form>
        <div>
          {searchResult.map(person => <Person key={person.id} person={person} />)}
          </div>
          <h2>add a new</h2>
      <form onSubmit={addPerson}>
  <div>name: <input value={newName} onChange={handleNameChange}/></div>
  <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
  <div><button type="submit">add</button></div>
</form>
<h2>Numbers</h2>
{persons.map(person => 
<Person key={person.id} person={person} />)}
    </div>
  )
}

export default App