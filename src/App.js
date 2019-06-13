import React from 'react';
import './App.css';
import Login from './components/Login'


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      currentUser: null
    }
  }
  render() {
    return (
      <div className="App">
        Hello World
        <Login />
      </div>
    );
  }
}


export default App;
