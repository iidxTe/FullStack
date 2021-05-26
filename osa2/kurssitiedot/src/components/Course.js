import React from 'react'


const Course = (props) => {
	return (
		<div>
			<Header name={props.course.name}/>
			<Content parts={props.course.parts}/>
			<Total parts={props.course.parts}/>
		</div>		
	)
}

const Header = ({name}) => {
    return (
      <div>
        <h2>{name}</h2>
      </div>
    )
  }

  const Part = ({part}) => {
    return (
		<li>{part.name} {part.exercises}</li>        
    )
  }

  const Content = ({parts}) => {
    return (
      <div>
		<ul>
        	{parts.map(part => 
			<Part key={part.id} part={part} />
			)}
        </ul>
      </div>
    )
  }

  const Total = ({parts}) => {
	  const tot = parts.reduce(
	  (sum, part) => sum + part.exercises, 0);

    return (
      <div>
        <p>Number of exercises {tot}</p>
      </div>
    )
  }


export default Course