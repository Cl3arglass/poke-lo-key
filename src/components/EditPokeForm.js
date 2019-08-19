import React from 'react';
import { connect } from 'react-redux'
import { updateEditPokeForm } from "../actions/editPokeForm"
import { updatePoke, deletePoke } from "../actions/pokes"

const EditPokeForm = ({ editPokeFormData, updateEditPokeForm, updatePoke, user_id, history, poke, deletePoke }) => {
	const handleInputChange = event => {
   	const { name, value } = event.target
   	const updatedFormInfo = {
   		...editPokeFormData,
   		[name]: value
   	}
   	updateEditPokeForm(updatedFormInfo)
   }

   const handleSubmit = event => {
   	event.preventDefault()
   	updatePoke({
   		...editPokeFormData,
         id: poke.id, 
   		user_id
   	}, history)
   	// signup(signupFormData, history)
   }

   const pokeId = poke ? poke.id :null

   return (
   	<div>
   	  <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={handleInputChange}
            value={editPokeFormData.name}
          /><br/>
          <input
            type="text"
            name="location"
            placeholder="location"
            onChange={handleInputChange}
            value={editPokeFormData.location}
          /><br/>
          <input
            type="text"
            name="found"
            placeholder="found"
            onChange={handleInputChange}
            value={editPokeFormData.found}
          /><br/>
          <input
            type="submit"
            value="Edit Poke"
          />
        </form>
        <button onClick={()=>deletePoke(pokeId, history)}>Delete Poke</button>
   	</div>
   	)
}

const mapStateToProps = state => {
	const user_id = state.currentUser ? state.currentUser.id : ""
	return {
		editPokeFormData: state.editPokeForm,
        user_id
	}
}
	

export default connect(mapStateToProps, { updateEditPokeForm, updatePoke, deletePoke })(EditPokeForm);

// t.string "name"
//     t.string "location"
//     t.string "found"
//     t.integer "user_id"