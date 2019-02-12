import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {description: 'Walk the dog', isCompleted: false },
        {description: 'Throw the dishes away', isCompleted: false },
        {description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }
  deleteTodo(index) {
    this.setState(
    {todos: this.state.todos.filter((todos, i) => i !== index)
    });
  }

   render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <h1 className="header">To Do List</h1>
          <ul className="to-dos">
          { this.state.todos.map( (todo, index) => 
            <ToDo 
            key={ index } 
            description={ todo.description } 
            isCompleted={ todo.isCompleted } 
            toggleComplete={ () => this.toggleComplete(index) } 
            deleteTodo= { () => this.deleteTodo(index) }
            />
            )}
          </ul>
          <form onSubmit={ (e) => this.handleSubmit(e) }>
            <input 
            className="input"
            type="text" 
            value={ this.state.newTodoDescription } 
            onChange={ (e) => this.handleChange(e) }
            />
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default App;
