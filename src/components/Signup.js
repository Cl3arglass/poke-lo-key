import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from "../actions/signupForm"
import { signup } from "../actions/currentUser"

const Signup = ({ signupFormData, updateSignupForm, signup, history}) => {
   
   const handleInputChange = event => {
   	const { name, value } = event.target
   	const updatedFormInfo = {
   		...signupFormData,
   		[name]: value
   	}
   	updateSignupForm(updatedFormInfo)
   }

   const handleSubmit = event => {
   	event.preventDefault()
   	signup(signupFormData, history)
   }

   return (
   	<div>
   	  <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            value={signupFormData.name}
          /><br/>
   	    <input
   	      type="text"
   	      name="email"
   	      placeholder="email"
   	      onChange={handleInputChange}
   	      value={signupFormData.email}
   	    /><br/>
   	    <input
   	      type="text"
   	      name="password"
   	      placeholder="password"
   	      onChange={handleInputChange}
   	      value={signupFormData.password}
   	    /><br/>
          <input
            type="text"
            name="password_confirmation"
            placeholder="password_confirmation"
            onChange={handleInputChange}
            value={signupFormData.password_confirmation}
          /><br/>
   	    <input
   	      type="submit"
   	      value="Sign Up"
   	    />
   	  </form>
   	</div>
   	)
}

const mapStateToProps = state => {
	return {
		signupFormData: state.signupForm
	}
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)