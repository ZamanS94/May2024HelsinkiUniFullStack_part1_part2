import { useState } from 'react'
import Person from './components/Person.jsx'
import _ from 'lodash'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName
    }
    const doesExist = persons.find(person => _.isEqual(person, personObject))

    if(doesExist){
      window.alert(`${doesExist.name} is already added to phonebook`)
      setNewName('')
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
        name: <input value={newName}
        onChange={handleNameChange} />
        </div>
        <button type="submit">add</button>
      </form> 
      <h2>Numbers</h2>
        {persons.map(person => 
          <Person key={person.name} person={person} />
        )}
    </div>
  )
}

export default App