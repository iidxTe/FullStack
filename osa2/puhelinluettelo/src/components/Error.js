import React from 'react'

const Error = ({ message }) => {
	const errorStyle = {
		color: 'red',
		fontStyle: 'italic',
		fontSize: 16,
		background: 'lightgrey',
		borderStyle: 'solid',
		borderRadius: '5px',
		padding: '10px',
		marginBottom: '10px'
	}

	if (message === null) {
	  return null
	}
  
	return (
	  <div style={errorStyle}>
		{message}
	  </div>
	)
  }

  export default Error