import React from 'react';
// import Login from './Login'
// import Logout from './Logout'
// import Signup from './Signup'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = ({ currentUser }) => {
	return (
		<div className="NavBar">
		    <p>Logged in as {currentUser.attributes.name}</p>
		   <NavLink exact to="/pokes">My Pokes</NavLink>
		   <NavLink exact to="/pokes/new">New Poke</NavLink>
		</div>
	)
	// if (currentUser) {
	// 	return (
	// 		<div>
	// 			Welcome, {currentUser.attributes.name}
	// 			<Logout/>
	// 		</div>
	// 		)
	// } else {
	// 	return (
	// 	<div>
	// 		Please signup or login
	// 		<Signup/>
	// 		<Login/>
	// 	</div>
	//     )
	// }
// return (
 //       <div>
 //          { currentUser ? `Welcome, ${currentUser.attributes.name}` : ""}
 //          { currentUser ? <Logout/> : <Login/> }
 //       </div>
 //    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)