import React from 'react';
import './App.css';
import Login from './components/Login'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null,
      loginForm: {
        email: "",
        password: ""
      }
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
              currentUser: userJSON
            })
         }
       })
       .catch(console.log)
  }



  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
        <h2>{ currentUser ? 
          `Logged in as ${currentUser.name}` :
           "Not logged in"
        }</h2>
        <Login 
          handleLoginFormChange={this.handleLoginFormChange}
          handleLoginFormSubmit={this.handleLoginFormSubmit}
          email={this.state.loginForm.email}
          password={this.state.loginForm.password}
        />
      </div>
    );
  }
}


export default App;
