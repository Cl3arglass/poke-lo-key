import { resetNewPokeForm } from './newPokeForm'
import { resetEditPokeForm } from './editPokeForm'

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

export const editPoke = poke => {
	return {
		type: "EDIT_POKE",
		poke
	}
}

export const deletePokeSuccess = pokeId => {
	return {
		type: "DELETE_POKE",
		pokeId
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
            dispatch(resetNewPokeForm())
            // dispatch(getPokes())
            history.push(`/pokes/${pokeJSON.data.id}`)
         }
       })
       .catch(console.log)
	}
}

export const updatePoke = (pokeData, history) => {
    console.log(pokeData)
    const token = localStorage.getItem("token")
	return dispatch => {
       	return fetch(`http://localhost:3001/api/pokes/${pokeData.id}}`, {
       		method: "PATCH",
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
            dispatch(editPoke(pokeJSON.data))
            dispatch(resetEditPokeForm())
            // dispatch(getPokes())
            history.push(`/pokes/${pokeJSON.data.id}`)
         }
       })
       .catch(console.log)
	}
}

export const deletePoke = ( pokeId, history) => {
   const token = localStorage.getItem("token")
	return dispatch => {
       	return fetch(`http://localhost:3001/api/pokes/${pokeId}}`, {
       		method: "DELETE",
       		headers: {
       			"Content-Type": "application/json",
       			"Authorization": token
       		}
       })
       	.then(result => result.json())
       	.then(pokeJSON => {
         if (pokeJSON.error) {
            alert(pokeJSON.error)
         } else {
            dispatch(deletePokeSuccess(pokeId))
            history.push("/pokes")
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