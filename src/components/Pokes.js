import React from 'react'

const Pokes = ({ pokes }) => {
   const pokesJSX = pokes.map(p => <p key={p.id}>{p.name}</p>)
   return (
   	<div className="Pokes">
   	  { pokesJSX }
   	</div>
   	)
}

export default Pokes