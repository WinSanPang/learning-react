import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    person: 'Adelka'
  }

  usernameChangedHandler = (event) => {
    this.setState({person: event.target.value})
  }

  render() {

    return(
      <div className="App">
      <UserInput 
        changed={this.usernameChangedHandler}
        currentName={this.state.person}/>
      <UserOutput username="Adel"/>
      <UserOutput username={this.state.person}/>
      <UserOutput username="Adel"/>
      </div>
    );
  }

}

  export default App;