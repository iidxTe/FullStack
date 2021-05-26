import React from 'react'

const Country = ({ name, capital, population, languages, flag}) => {
  return (
  	  <div key={name}>
		<h1>{name}</h1>
		capital {capital}<br/>
		population {population}
		<h2>languages</h2>
			<ul key={name}>
        		{languages.map(language => <li key={language.name}>{language.name}</li>)}
      		</ul><br/>
		<img src={flag} alt="flag" width="200" height="100"/>
	  </div>
  )
}

export default Country