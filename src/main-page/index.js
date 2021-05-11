import logo from './logo.svg';
import './mainPage.css';
import Navigation from './navigation';
import React, { Component } from 'react';
import AddNewTodo from './addTodo';
import TodoList from './todoList';

//TODO: Use SFC in place of class components
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { allToDos: [], filteredTodos: [] };
  }

  //TODO: React.useeffect
  async componentDidMount() {
    var todos = await this.fetchToDos();
    this.setState({
      allToDos: todos,
      filteredTodos: todos,
      status: ''
    });
  }

  async fetchToDos() {
    const response = await fetch('/todo.json');
    return await response.json();
  }

  //TODO: Redux/useReducer/react hooks could avoid putting actions into parent
  addNewTodo = (todo) => {
    this.state.allToDos.push(todo);
    this.filterTodo(this.state.status);
    this.setState({
      allToDos: this.state.allToDos
    });
  }

  updateTodo = (todo) => {
    let todos = this.state.allToDos;
    var index = todos.findIndex(t => t.id === todo.id);
    if (todo.status === 'delete') {
      todos.splice(index, 1);
    } else {
      todos[index] = todo;
    }
    this.filterTodo(this.state.status);
    this.setState({
      allToDos: todos
    });
  }

  filterTodo = (status) => {
    let todos = this.state.allToDos;
    if (status) {
      todos = todos.filter(t => t.status === status);
    }
    this.setState({
      filteredTodos: todos,
      status: status
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
          </div>
          <div className="col-9 text-center font-weight-bold">ToDo App</div>
        </div>
        <div className="row">
          <div className="col-3 navigationColBorder">
            <Navigation subtitle="Navigation" filterTodo={this.filterTodo} status={this.state.status} />
          </div>
          <div className="col-9">
            <AddNewTodo addNewTodo={this.addNewTodo} />
            <TodoList todos={this.state.filteredTodos} updateTodo={this.updateTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
