import { useState } from 'react'
import Person from './components/Person.jsx'

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
  
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
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