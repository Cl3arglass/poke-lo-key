import React from 'react'
// import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Pokes = ({ pokes }) => {
   // const pokesJSX = pokes.map(p => <p key={p.id}>{p.name}</p>)
   const pokesLinks = pokes.map(p => (<><Link  key={p.id} to={`/pokes/${p.id}`}>{p.attributes.name}</Link><br/></>))
   return (
      pokes.length ?
   	<div className="Pokes">   
   	  { pokesLinks }
   	</div> :
      <h3>Add a Poke</h3>
   	)
}



// const mapStateToProps = state => {
//    return {
//       pokes: state.pokes
//    }
// }
// export default connect(mapStateToProps)(Pokes)
export default Pokes