const initialState = []

export default (state = initialState, action) => {
 	switch (action.type) {
 		case "SET_POKES":
 		  return action.pokes
 		 case "CLEAR_POKES":
 		  return initialState
 		default:
 		  return state
 	}
 } 