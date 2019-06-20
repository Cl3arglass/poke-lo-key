import React from 'react';
import './App.css';
import Login from './components/Login'
import Pokes from './components/Pokes'
import Logout from './components/Logout'



class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      },
      pokes: []
    }
  }

  handleLoginFormChange = event => {
     const { name, value } = event.target
     this.setState({
        loginForm: {
          ...this.state.loginForm,
          [name]: value
        }
     })
  }

  handleLoginFormSubmit = event => {
    event.preventDefault()

    const userInfo = this.state.loginForm
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo 
      })
    }

    fetch("http://localhost:3001/api/login", headers)
       .then(result => result.json())
       .then(userJSON => {
         if (userJSON.error) {
            alert(userJSON.error)
         } else {
            this.setState({
              currentUser: userJSON.user, 
              loginForm: {
                email: "",
                password: ""
              }
            })
            localStorage.setItem('token', userJSON.jwt)
         }
       })
       .catch(console.log)
  }

  getPokes = () => {
    const token = localStorage.getItem("token")
    fetch("http://localhost:3001/api/pokes", {
      headers: {
        "Authorization": token
      }
    })
      .then(result => result.json())
      .then(pokes => {
        if (pokes.error) {
           alert("Not authorized for those secrets")
        } else {
          this.setState({
            pokes
          })
        }
      })
      .catch(console.log)
  }

  logout = event => {
    event.preventDefault()
    localStorage.removeItem("token")
    this.setState({
      currentUser: null,
      pokes: []
    })
  }



  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <h2>{ currentUser ? 
          `Logged in as ${currentUser.name}` :
           "Not logged in"
        }</h2>

        {
          this.state.currentUser ?
        <Logout logout={this.logout}/> :
        <Login 
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
        />
        }
        
        <button onClick={this.getPokes}>Show User's Poke's</button>
        <Pokes pokes={this.state.pokes} />
      </div>
    );
  }
}


export default App;
