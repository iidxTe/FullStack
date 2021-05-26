import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([])
  const [givenString, setGivenString] = useState('')

  useEffect(() => {
	console.log('effect')
	axios
	  .get('https://restcountries.eu/rest/v2/all')
	  .then(response => {
		console.log('promise fulfilled')
		setCountries(response.data)
	  })
  }, [])

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setGivenString(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.toUpperCase().includes(givenString.toUpperCase()))

  return (
  	<div>
	  <Filter givenString={givenString} handler={handleFilterChange}/>  

	  {countriesToShow.length > 10 ? (
		  <p>Too many matches, spesify another filter</p>
	  ) : (
		<Countries countries={countriesToShow}/>
	  )
	  }
	  
    </div>  
  )

}

export default App