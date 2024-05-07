import { useState, useEffect } from 'react'
import Person from './components/Person.jsx'
import PersonForm from './components/PersonForm.jsx'
import Filter from './components/Filter.jsx'
import _ from 'lodash'
import personService from './services/persons.js'
import Notification from './components/Notification.jsx'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setSearch] = useState('')
  const [notificationMessage, setMessage] = useState(null)

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
      id: (Math.floor(Math.random() * (100 - persons.length)) + persons.length + 1).toString()
    }
    const doesExist = persons.find(person => person.name === newName)

    if(doesExist){
      if (window.confirm(`${doesExist.name} is already added to phonebook, replace the old number with a new one?`)) {
        personService
        .update(doesExist.id,personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          setMessage(`${personObject.name} has been updated`)
          setTimeout(() => {setMessage(null)}, 5000)
          setNewName('')
          setNewNumber('')
        })
      }
      else {
        setNewName('')
        setNewNumber('')
      }
    }
    else{
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setMessage(`${personObject.name} has been added`)
        setTimeout(() => {setMessage(null)}, 5000)
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

  const handleDelete = (deletePerson) => {
    if (window.confirm(`Delete ${deletePerson.name}?`)) {
      personService.deletePerson(deletePerson)
        .then((response) => {
          console.log(response)
          const updatedPersons = persons.filter(person => person.id !== deletePerson.id)
          setPersons(updatedPersons)
        })
        .catch(error => {
          console.log(error)
          setMessage(`Information of ${deletePerson.name} has already been removed from server`)
          setTimeout(() => {setMessage(null)}, 5000)
        }
        )
    }
  }

  let searchResult = []

  if (newSearch !== '') {
    searchResult = persons.filter(person => 
      person.name.toLocaleLowerCase().includes(newSearch.toLowerCase()))
  }

    return (
      <div>
        <h2>Phonebook</h2>
        <Notification message={notificationMessage} />
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
        {persons.map(person => <Person key={person.id} person={person} handleDelete = {handleDelete}/>)}

      </div>
    )
}

export default App
