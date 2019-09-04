const initialState = []

export default (state = initialState, action) => {
 	switch (action.type) {
 		case "SET_POKES":
 		  return action.pokes
 		case "ADD_POKE":
 		  return state.concat(action.poke)
 		case "EDIT_POKE":
           return state.map(poke => poke.id === action.poke.id ? action.poke : poke)
 		case "CLEAR_POKES":
 		  return initialState
 		case "DELETE_POKE":
 		  return state.filter(poke => poke.id === action.pokeId ? false : true)
 		case "LIKE_POKE":
           return state.map(poke => poke.id === action.poke.id ? action.poke : poke)
 		default:
 		  return state
 	}
 } 