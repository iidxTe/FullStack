import React, { useState } from 'react';
import Country from './Country'

const Countries = ({countries}) => {

	return (
		<ul>
			{countries.length > 1 ? (
				countries.map(country =>
					<li key={country.name}>{country.name} <button>show</button></li>
				)
			) : (
				countries.map(country =>
				<Country key={country.name} name={country.name} capital={country.capital} population={country.population} languages={country.languages} flag={country.flag}/>
				)
			)}		
      </ul>
	)
}

export default Countries