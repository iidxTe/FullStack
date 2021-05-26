import React, { useState, useEffect } from 'react'

import Error from './components/Error'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ givenString, setGivenString ] = useState('')
  const [ changeMessage, setChangeMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
	personService
      .getAll()
      .then(initialPersons => {
		setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
	event.preventDefault()

	const nameTaken = (person) => {
		return person.name === newName
	}

	const personObject = {
	  name: newName, 
	  number: newNumber
	}

	const per = persons.find(nameTaken)
	console.log(per)

	if (per) {
		if (per.number === newNumber) {
			window.alert(`${newName} is already added to phonebook`);
		} else {
			if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
				personService
				.update(per.id, personObject)
				.then(returnedPerson => {
					setPersons(persons.map(person => person.id !== per.id ? person : returnedPerson))
					setNewName('')
					setNewNumber('')
					setChangeMessage(`Updated ${per.name}`)
					setTimeout(() => {setChangeMessage(null)}, 5000)	
				})
				.catch(error => {
					setErrorMessage(
					  `Information of ${per.name} has already been removed from server`
					)
					setTimeout(() => { setErrorMessage(null)}, 5000)
					setPersons(persons.filter(p => p.id !== per.id))
				  })
				
			} else {
				setNewName('')
				setNewNumber('')
			}
		}
		
	} else {		
		personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson)) 
        setNewName('')
		setNewNumber('')
		setChangeMessage(`Added ${returnedPerson.name}`)
		setTimeout(() => {setChangeMessage(null)}, 5000)
      })

	}
	
  }

  const deletePerson = (id) => {

	const person = persons.find(p => p.id === id)

	if (window.confirm(`Delete ${person.name} ?`)) {
		personService
		.delete(id) 
    	setPersons(persons.filter(p => p.id !== id))
		setChangeMessage(`Deleted ${person.name}`)
		setTimeout(() => {setChangeMessage(null)}, 5000)
      }	
	
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setGivenString(event.target.value)
  }

  const peopleToShow = persons.filter(person => person.name.toUpperCase().includes(givenString.toUpperCase()))
		
  return (
    <div>

      <h1>Phonebook</h1> 
	  <Notification message={changeMessage} /> 
	  <Error message={errorMessage} />

	  <Filter givenString={givenString} handler={handleFilterChange}/>    

	  <h2>Add new person</h2>
	  <PersonForm addPerson={addPerson} name={newName} nameHandler={handleNameChange} number={newNumber} numberHandler={handleNumberChange}/>

      <h2>Numbers</h2>
	  <Persons people={peopleToShow} deletePerson={deletePerson}/>

    </div>
  )
}

export default App