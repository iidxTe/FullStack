import React from 'react'

const Notification = ({ message }) => {
	const notificationStyle = {
		color: 'green',
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
	  <div style={notificationStyle}>
		{message}
	  </div>
	)
  }

  export default Notification