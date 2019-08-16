export const updateEditPokeForm = formData => {
	return {
		type: "UPDATE_EDIT_POKE_FORM",
		formData
	}
}


export const resetEditPokeForm = () => {
	return {
		type: "RESET_EDIT_POKE_FORM"
	}
}