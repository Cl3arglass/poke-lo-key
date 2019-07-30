import React from 'react'
import { connect } from 'react-redux'
import PokeCard from './PokeCard.js'

const Pokes = ({ pokes }) => {
   // const pokesJSX = pokes.map(p => <p key={p.id}>{p.name}</p>)
   const pokesCards = pokes.map(p => <PokeCard poke={p} key={p.id}/>)
   return (
   	<div className="Pokes">
   	  { pokesCards }
   	</div>
   	)
}



const mapStateToProps = state => {
   return {
      pokes: state.pokes
   }
}
export default connect(mapStateToProps)(Pokes)