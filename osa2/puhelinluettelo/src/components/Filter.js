import React from 'react'

const Filter = ({givenString, handler}) => {
	return (
	  <div>
		  filter shown with: <input value={givenString} onChange={handler}/><br/>
	  </div>
	)
}

export default Filter