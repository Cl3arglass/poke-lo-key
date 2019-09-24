import React from 'react';
import { connect } from 'react-redux'
import { updateNewPokeForm } from "../actions/newPokeForm"
import { createPoke } from "../actions/pokes"
import Comments from "./Comments"

// react state, [], add strings to it, state lives here locally, state change on submit, showing state change as list on page,


const NewPokeForm = ({ newPokeFormData, updateNewPokeForm, createPoke, user_id, history }) => {

   
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
   	}, history)
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
   	  <Comments />
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