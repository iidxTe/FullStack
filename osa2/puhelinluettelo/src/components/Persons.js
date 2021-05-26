import React from 'react'
import Person from './Person'

const Persons = ({people, deletePerson}) => {
	return (
		<ul>
		{people.map(person =>
  		  <Person 
			key={person.name} 
			name={person.name} 
			number={person.number}
			deletePerson={() => deletePerson(person.id)}
			/>
		)}
      </ul>
	)
}

export default Persons