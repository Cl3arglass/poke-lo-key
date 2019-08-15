import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Pokes = ({ pokes }) => {
   // const pokesJSX = pokes.map(p => <p key={p.id}>{p.name}</p>)
   const pokesLinks = pokes.map(p => (<><Link  key={p.id} to={`/pokes/${p.id}`}>{p.attributes.name}</Link><br/></>))
   return (
   	<div className="Pokes">
   	  { pokesLinks }
   	</div>
   	)
}



const mapStateToProps = state => {
   return {
      pokes: state.pokes
   }
}
export default connect(mapStateToProps)(Pokes)