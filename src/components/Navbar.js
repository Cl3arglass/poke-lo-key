import React from 'react';
import Login from './Login'
import Logout from './Logout'
import { connect } from 'react-redux'

const Navbar = ({ currentUser }) => {
	return (
       <div>
          { currentUser ? `Welcome, ${currentUser.user.data.attributes.name}` : ""}
          { currentUser ? <Logout/> : <Login/> }
       </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)