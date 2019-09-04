const initialState = {
	name: "",
	location: "", 
	found: "",
	likes: "",
	user_id: ""
}


export default (state=initialState, action) => {
	switch (action.type) {
		case "UPDATE_NEW_POKE_FORM":
		  return action.formData
		case "RESET_NEW_POKE_FORM":
		  return initialState
		default:
		  return state 
	}
}