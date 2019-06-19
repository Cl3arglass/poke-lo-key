import React from 'react'

const Pokes = ({ pokes }) => {
   const pokesJSX = pokes.map(p => <p>{p.name}</p>)
   return (
   	<div className="Pokes">
   	  { pokesJSX }
   	</div>
   	)
}

export default Pokes