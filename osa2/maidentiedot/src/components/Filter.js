import React from 'react'

const Filter = ({givenString, handler}) => {
	return (
	  <div>
		 find countries <input value={givenString} onChange={handler}/><br/>
	  </div>
	)
}

export default Filter