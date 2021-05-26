import React from 'react'

const PersonForm = ({addPerson, name, nameHandler, number, numberHandler}) => {
	return (
		<form onSubmit={addPerson}>       
          name: <input value={name} onChange={nameHandler}/><br/>
		  number: <input value={number} onChange={numberHandler}/><br/>
          <button type="submit">add</button>       	
      	</form>
	)
}

export default PersonForm