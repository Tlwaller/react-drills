import React, {Component} from 'react';

class Todo extends Component {
    render() {
        return(
            <ul>
                {this.props.todoList.map(val => <li>{val}</li>)}
            </ul>
        )
    }
}

export default Todo;