import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends Component {

    state = {
        todos: []
    }
   
    componentDidMount() {
        axios.get(`http://jsonplaceholder.typicode.com/todos`)
            .then(res => {
          this.setState({
            todos: res.data
          });
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <h3>Todo List</h3>
                    {this.state.todos.map((todo => 
                        <li>{todo.id} : {todo.title}</li>))}
                </ul>
            </div>
        )
    }
}

export default TodoList;
