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

export const addPoke = poke => {
	return {
		type: "ADD_POKE",
		poke
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

export const createPoke = (pokeData, history) => {
	console.log(pokeData)
	const token = localStorage.getItem("token")
	return dispatch => {
       	return fetch("http://localhost:3001/api/pokes", {
       		method: "POST",
       		headers: {
       			"Content-Type": "application/json",
       			"Authorization": token
       		},
       		body: JSON.stringify(pokeData)
       })
       	.then(result => result.json())
       	// .then(console.log)
       	.then(pokeJSON => {
         if (pokeJSON.error) {
            alert(pokeJSON.error)
         } else {
            // console.log(pokeJSON)
            dispatch(addPoke(pokeJSON.data))
            // dispatch(resetNewPokeForm())
            // dispatch(getPokes())
            history.push(`/pokes/${pokeJSON.data.id}`)
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