import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './reducers/users'
import currentUserReducer from './reducers/currentUser'
import loginFormReducer from './reducers/loginForm'
import pokesReducer from './reducers/pokes'
import signupFormReducer from './reducers/signupForm'
import newPokeFormReducer from './reducers/newPokeForm'



const reducer = combineReducers({
  users: usersReducer ,
  currentUser: currentUserReducer,
  loginForm: loginFormReducer,
  pokes: pokesReducer,
  signupForm: signupFormReducer,
  newPokeForm: newPokeFormReducer    

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(
  applyMiddleware(thunk)
));

export default store