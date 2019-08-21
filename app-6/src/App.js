import React, { Component } from "react";
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: [],
      input: ''
    }
  }

  addToList(input) {
    let listArr = this.state.todoList;
    listArr.push(input);
    this.setState({todoList: listArr, input: ''});
  }

  inputChange(value) {
    this.setState({input: value});
  }

  render() {
    return (
      <div>
        <h1>My to-do list:</h1>
        <input placeholder='Enter new task' 
        onChange={e => this.inputChange(e.target.value)} 
        value={this.state.input} 
        type='text' />
        <button onClick={() => this.addToList(this.state.input)}>Add</button>
        <Todo todoList={this.state.todoList}/>
      </div>
    );
  }
}

export default App;