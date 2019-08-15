import React from 'react'


const PokeCard = ({ poke }) => {
   
   return (
   	poke ?
   	<div>
	   	<h3>{poke.attributes.name}</h3>
	   	<p>Location: {poke.attributes.location}</p>
	   	<p>Found? {poke.attributes.found}</p>
   	</div> :
   	<p> Pokes go here</p>
   	)
}

export default PokeCard