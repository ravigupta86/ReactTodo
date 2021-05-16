import logo from '../assets/images/logo.svg';
import './mainPage.css';
import { useEffect, useState } from 'react';
import AddNewTodo from './addTodo';
import TodoList from './todoList';
import Navigation from './navigation';
import TodoSummary from './todoSummary';
//import todoData from '../assets/toDo';

function App(params) {
  const [allToDo, setAllTodo] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);
  const [status, setStatus] = useState('');

  async function fetchToDos() {
    const response = await fetch('/todo.json');
    return await response.json();
  }

  //TODO: Redux/useReducer/react hooks could avoid putting actions into parent
  const addNewTodo = (todo) => {
    var todos = allToDo;
    todos.push(todo);
    setAllTodo(todos);
    filterTodo(status);
  }

  const updateTodo = (todo) => {
    var index = allToDo.findIndex(t => t.id === todo.id);
    if (todo.status === 'delete') {
      allToDo.splice(index, 1);
    } else {
      allToDo[index] = todo;
    }
    filterTodo(status);
    setAllTodo(allToDo);
  }

  const filterTodo = (filterStatus) => {
    let todos = allToDo.filter(t => !filterStatus || t.status === filterStatus);
    setFilteredTodo(todos);
    setStatus(filterStatus);
  }

  useEffect(() => {
    async function fetchData() {
      //artificial delay
      await delay(1000);
      let todos = await fetchToDos();
      setAllTodo(todos);
      setFilteredTodo(todos);
    }
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    fetchData();
  }, []);

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
          <Navigation subtitle="Navigation" filterTodo={filterTodo} status={status} />
          <TodoSummary allToDo={allToDo} />
        </div>
        <div className="col-9">
          <AddNewTodo addNewTodo={addNewTodo} />
          <TodoList todos={filteredTodo} updateTodo={updateTodo} />
        </div>
      </div>
    </div>
  );

}

export default App;