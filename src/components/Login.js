import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm"

const Login = ({ handleLoginFormChange, handleLoginFormSubmit, email, password, loginForm, updateLoginForm}) => {

   

   return (
   	<div>
   	  <form onSubmit={handleLoginFormSubmit}>
   	    <input
   	      type="text"
   	      name="email"
   	      placeholder="email"
   	      onChange={handleLoginFormChange}
   	      value={email}
   	    /><br/>
   	    <input
   	      type="text"
   	      name="password"
   	      placeholder="password"
   	      onChange={handleLoginFormChange}
   	      value={password}
   	    /><br/>
   	    <input
   	      type="submit"
   	      value="Login"
   	    />
   	  </form>
   	</div>
   	)
}

const mapStateToProps = state => {
	return {
		loginForm: state.loginForm
	}
}

export default connect(mapStateToProps, { updateLoginForm })(Login)