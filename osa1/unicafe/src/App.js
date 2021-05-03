import React, { useState } from 'react'

const Display = props => <div>{props.text}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {

	return(
	  <div>	
		  <table>
		  <tbody>
		  	<StatisticLine text="good" value={props.good} />
			<StatisticLine text="neutral" value={props.neutral} />
			<StatisticLine text="bad" value={props.bad} />
			<StatisticLine text="all" value={props.all} />
			<StatisticLine text="average" value={props.average.toFixed(1)} />
			<StatisticLine text="positive" value={props.positives.toFixed(1)} text2="%"/>
			</tbody>
		  </table>
	  </div>
	)
  }

const StatisticLine = (props) => {
	return (
		<tr>
			<td >{props.text}</td>
			<td >{props.value} {props.text2}</td>
		</tr>
		
	) 
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setFeedback] = useState(0)
  const [average, setAverage] = useState(0)
  const [positives, setPositives] = useState(0)

  const setToGood = (good, all) => {
    return setGood(good), setFeedback(all), setAverage((good-bad)/all), setPositives((good/all)*100)
  }

  const setToNeutral = (neutral, all) => {
    return setNeutral(neutral), setFeedback(all), setAverage((good-bad)/all), setPositives((good/all)*100)
  }

  const setToBad = (bad, all) => {
    return setBad(bad), setFeedback(all), setAverage((good-bad)/all), setPositives((good/all)*100)
  }

  if (all === 0) {
	  return (
		<div>
			<h1>give feedback</h1>
      		<Button handleClick={() => setToGood(good + 1, all + 1)} text="good" />
      		<Button handleClick={() => setToNeutral(neutral + 1, all + 1)} text="neutral" />
      		<Button handleClick={() => setToBad(bad + 1, all + 1)} text="bad" />
	  		<h1>statistics</h1>
			<Display text="No feedback given" />
		</div>
	  )
  } else {
	return (
		<div>
			<h1>give feedback</h1>
      		<Button handleClick={() => setToGood(good + 1, all + 1)} text="good" />
      		<Button handleClick={() => setToNeutral(neutral + 1, all + 1)} text="neutral" />
      		<Button handleClick={() => setToBad(bad + 1, all + 1)} text="bad" />
	  		<h1>statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positives={positives}/>
		</div>
	  )

  }

}

export default App