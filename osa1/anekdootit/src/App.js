import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  
  const votesArray = [0, 0, 0, 0, 0, 0]

  const setVotes = () => {
	  //kesken 1.13 

  }

  const randomNumber = (min, max) => { 
    return (Math.random() * (max - min) + min).toFixed(0);
  }

  return (
    <div>
      {anecdotes[selected]}<br/>
	  has {votesArray[selected]} votes<br/>
	  <button onClick={() => setVotes}>
          vote
      </button>
	  <button onClick={() => setSelected(randomNumber(0,5))}>
          next anecdote
      </button>
    </div>
  )
}

export default App