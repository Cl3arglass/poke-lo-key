import React from 'react'
import { Link } from 'react-router-dom'

const PokeCard = ({ poke }) => {
   
   return (
   	poke ?
   	<div>
	   	<h3>{poke.attributes.name}</h3>
	   	<p>Location: {poke.attributes.location}</p>
	   	<p>Found? {poke.attributes.found}</p>
        <Link to={`/pokes/${poke.id}/edit`}>Edit Poke</Link>
   	</div> :
   	<p> Pokes go here</p>
   	)
}

export default PokeCard
// props.match.path === "/pokes/:id/edit"