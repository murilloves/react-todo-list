import React, { Component } from 'react';
import '../App.css';

import Form from './Form';
import List from './List';

class App extends Component {

  state = {
      inputValue: '',
      todos: []
  }

  handleChange = (evnt) => {
    this.setState({ inputValue: evnt.target.value });
  }

  handleClick = (index) => {
    // alert(index);
    const todos = this.state.todos;
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, inputValue: '' })
  }

  render() {
    return (
      <div className="App">
        <div className="todo-list">TODO LIST</div>
        <Form
          handleChange={this.handleChange}
          inputValue={this.state.inputValue}
          handleSubmit={this.handleSubmit}
        />
        <List
          todos={this.state.todos}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
