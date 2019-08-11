//synchronous
export const setPokes = pokes => {
	return {
		type: "SET_POKES",
		pokes: pokes
	}
}

export const clearPokes = () => {
	return {
		type: "CLEAR_POKES"
	}
}

//async
export const getPokes = () => {
	const token = localStorage.getItem("token")
       return dispatch => {
       	return fetch("http://localhost:3001/api/pokes", {
       		method: "GET",
       		headers: {
       			"Authorization": token
       		},
       })
       	.then(result => result.json())
       	.then(pokesJSON => {
         if (pokesJSON.error) {
            alert(pokesJSON.error)
         } else {
            dispatch(setPokes(pokesJSON.data))
         }
       })
       .catch(console.log)
	}
}
// getPokes = () => {
  //   const token = localStorage.getItem("token")
  //   fetch("http://localhost:3001/api/pokes", {
  //     headers: {
  //       "Authorization": token
  //     }
  //   })
  //     .then(result => result.json())
  //     .then(pokes => {
  //       if (pokes.error) {
  //          alert("Not authorized for those secrets")
  //       } else {
  //         this.setState({
  //           pokes
  //         })
  //       }
  //     })
  //     .catch(console.log)
  // }