import React from 'react';
import './App.css';
import Login from './components/Login'
// import Pokes from './components/Pokes'
import Signup from './components/Signup'
import Home from './components/Home'
import Logout from './components/Logout'
import NewPokeForm from './components/NewPokeForm'
import EditPokeForm from './components/EditPokeForm'
import PokeCard from './components/PokeCard'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Navbar from './components/Navbar'
// import MainContainer from './components/MainContainer'
import { Route, withRouter, Switch } from 'react-router-dom'
import PokesContainer from './containers/PokesContainer'



class App extends React.Component {


  componentDidMount() {
    this.props.getCurrentUser()
  }

  // componentDidMount() {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     fetch("http://localhost:3001/api/get_current_user", {
  //       headers: {
  //         "Authorization": token
  //       }
  //     })
  //     .then(result => result.json())
  //       .then(response => {
  //         if (response.error) {
  //           alert(response.error) 
  //         } else {
  //           this.setState({
  //             currentUser: response.user
  //           })
  //         }
  //       })
  //       .catch(console.log)
  //   }
  // }

  // handleLoginFormChange = event => {
  //    const { name, value } = event.target
  //    this.setState({
  //       loginForm: {
  //         ...this.state.loginForm,
  //         [name]: value
  //       }
  //    })
  // }

  // handleLoginFormSubmit = event => {
  //   event.preventDefault()

  //   const userInfo = this.state.loginForm
  //   const headers = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: userInfo 
  //     })
  //   }

  //   fetch("http://localhost:3001/api/login", headers)
  //      .then(result => result.json())
  //      .then(userJSON => {
  //        if (userJSON.error) {
  //           alert(userJSON.error)
  //        } else {
  //           this.setState({
  //             currentUser: userJSON.user, 
  //             loginForm: {
  //               email: "",
  //               password: ""
  //             }
  //           })
  //           localStorage.setItem('token', userJSON.jwt)
  //        }
  //      })
  //      .catch(console.log)
  // }

 



  render() {
   
    const { loggedIn, pokes } = this.props
    return (
     <div className="App">
          { loggedIn ? <><Navbar currentUser={this.props.currentUser}/> <Logout/></> : null }
          <Switch>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/pokes' component={PokesContainer}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/' render={(props)=> loggedIn ? <PokesContainer/>
            : <Home/>}/>
          <Route exact path='/pokes/new' component={NewPokeForm}/>
          <Route exact path='/pokes/:id' render={props=> {
              const poke = pokes.find(poke => poke.id === props.match.params.id)
              return <PokeCard poke={poke} {...props}/>
            }
          }/>
          <Route exact path='/pokes/:id/edit' render={props=> {
              const poke = pokes.find(poke => poke.id === props.match.params.id)
              return <><PokeCard poke={poke} {...props}/> <EditPokeForm poke={poke} {...props}/></>
            }
          }/>
          </Switch>
        </div>  
      );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    pokes: state.pokes, 
    currentUser: state.currentUser
  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
