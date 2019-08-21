import React, { Component } from "react";
//components
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <div>
        <Login handleUserName={this.handleUserName}/>
      </div>
    );
  }
}

export default App;