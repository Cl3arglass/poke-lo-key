import React from 'react';
import { connect } from 'react-redux'
import { updateNewPokeForm } from "../actions/newPokeForm"
// import { signup } from "../actions/currentUser"

const NewPokeForm = ({ newPokeFormData, updateNewPokeForm }) => {
	const handleInputChange = event => {
   	const { name, value } = event.target
   	const updatedFormInfo = {
   		...newPokeFormData,
   		[name]: value
   	}
   	updateNewPokeForm(updatedFormInfo)
   }

   const handleSubmit = event => {
   	event.preventDefault()
   	// signup(signupFormData, history)
   }

   return (
   	<div>
   	  <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            value={newPokeFormData.name}
          /><br/>
   	    <input
   	      type="text"
   	      name="location"
   	      placeholder="location"
   	      onChange={handleInputChange}
   	      value={newPokeFormData.location}
   	    /><br/>
   	    <input
   	      type="text"
   	      name="found"
   	      placeholder="found"
   	      onChange={handleInputChange}
   	      value={newPokeFormData.found}
          /><br/>
   	    <input
   	      type="submit"
   	      value="Add New Poke"
   	    />
   	  </form>
   	</div>
   	)
}

const mapStateToProps = state => {
	return {
		newPokeFormData: state.newPokeForm
	}
}
	

export default connect(mapStateToProps, { updateNewPokeForm })(NewPokeForm);

// t.string "name"
//     t.string "location"
//     t.string "found"
//     t.integer "user_id"