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

  }



  render() {
    return (
      <div className="App">
        Hello World
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
