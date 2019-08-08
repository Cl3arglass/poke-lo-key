export const updateNewPokeForm = formData => {
	return {
		type: "UPDATE_NEW_POKE_FORM",
		formData
	}
}


export const resetNewPokeForm = () => {
	return {
		type: "RESET_NEW_POKE_FORM"
	}
}