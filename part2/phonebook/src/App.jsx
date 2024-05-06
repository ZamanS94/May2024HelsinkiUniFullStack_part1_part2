import { useState } from 'react'
import Person from './components/Person.jsx'
import _ from 'lodash'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-123'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
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



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
  <div>name: <input value={newName} onChange={handleNameChange}/></div>
  <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
  <div><button type="submit">add</button></div>
</form>
      <h2>Numbers</h2>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
    </div>
  )
}

export default App