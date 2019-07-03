//synchronous
export const setCurrentUser = user => {
	return {
		type: "SET_CURRENT_USER",
		user: user
	}
}

//async
export const login = credentials => {
	return {
       return dispatch => {
       	return fetch("http://localhost:3001/api/login", {
       		method: "POST",
       		headers: {
       			"Content-Type": "application/json"
       		},
       		body: JSON.stringify({email: "lass@lass.com", password: "password"})
       })
	}
}