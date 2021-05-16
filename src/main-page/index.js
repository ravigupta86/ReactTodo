import logo from '../assets/images/logo.svg';
import './mainPage.css';
import AddNewTodo from './addTodo';
import TodoList from './todoList';
import Navigation from './navigation';
import TodoSummary from './todoSummary';
import useTodos from '../hooks/useTodos';
//import todoData from '../assets/toDo';

function App(params) {
  const { allToDo, filteredTodo, status,
    addNewTodo, updateTodo, filterTodo } = useTodos();

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <img src={logo} className="App-logo mx-auto d-block" alt="logo" />
        </div>
        <div className="col-9 text-center font-weight-bold"><h1>ToDo App</h1></div>
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