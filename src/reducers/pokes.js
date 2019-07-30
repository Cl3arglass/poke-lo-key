export default (state = [], action) => {
 	switch (action.type) {
 		case "SET_POKES":
 		  return action.pokes
 		default:
 		  return state
 	}
 } 