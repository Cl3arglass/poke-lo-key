import React from 'react';
import { connect } from 'react-redux'
import { updateNewPokeForm } from "../actions/newPokeForm"
import { createPoke } from "../actions/pokes"

const NewPokeForm = ({ newPokeFormData, updateNewPokeForm, createPoke, user_id }) => {
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
   	createPoke({
   		...newPokeFormData,
   		user_id
   	})
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
	const user_id = state.currentUser ? state.currentUser.id : ""
	return {
		newPokeFormData: state.newPokeForm,
        user_id
	}
}
	

export default connect(mapStateToProps, { updateNewPokeForm, createPoke })(NewPokeForm);

// t.string "name"
//     t.string "location"
//     t.string "found"
//     t.integer "user_id"