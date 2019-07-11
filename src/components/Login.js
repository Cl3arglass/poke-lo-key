import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm"
import { login } from "../actions/currentUser"

// const Login = ({ handleLoginFormChange, handleLoginFormSubmit, email, password, loginForm, updateLoginForm}) => {
const Login = ({ loginFormData, updateLoginForm, login}) => {
   
   const handleInputChange = event => {
   	const { name, value } = event.target
   	const updatedFormInfo = {
   		...loginFormData,
   		[name]: value
   	}
   	updateLoginForm(updatedFormInfo)
   }

   const handleSubmit = event => {
   	event.preventDefault()
   	login(loginFormData)
   }

   return (
   	// <div>
   	//   <form onSubmit={handleLoginFormSubmit}>
   	//     <input
   	//       type="text"
   	//       name="email"
   	//       placeholder="email"
   	//       onChange={handleLoginFormChange}
   	//       value={email}
   	//     /><br/>
   	//     <input
   	//       type="text"
   	//       name="password"
   	//       placeholder="password"
   	//       onChange={handleLoginFormChange}
   	//       value={password}
   	//     /><br/>
   	//     <input
   	//       type="submit"
   	//       value="Login"
   	//     />
   	//   </form>
   	// </div>
   	<div>
   	  <form onSubmit={handleSubmit}>
   	    <input
   	      type="text"
   	      name="email"
   	      placeholder="email"
   	      onChange={handleInputChange}
   	      value={loginFormData.email}
   	    /><br/>
   	    <input
   	      type="text"
   	      name="password"
   	      placeholder="password"
   	      onChange={handleInputChange}
   	      value={loginFormData.password}
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
		loginFormData: state.loginForm
	}
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)