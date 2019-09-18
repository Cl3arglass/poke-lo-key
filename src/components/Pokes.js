import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { likePoke } from "../actions/pokes"

const Pokes = ({ pokes, likePoke }) => {
   // const pokesJSX = pokes.map(p => <p key={p.id}>{p.name}</p>)
   const pokesLinks = pokes.map(p => (<div key={p.id} className="wrapper"><Link to={`/pokes/${p.id}`}>{p.attributes.name}</Link>
      <p>Likes: {p.attributes.likes}</p> <button onClick={()=>likePoke(p)}>Like Poke</button><br/></div>))
      
      
   return (
      pokes.length ?
   	<div id="Pokes">   
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
export default connect(null, {likePoke})(Pokes)