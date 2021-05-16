import { useEffect, useState } from 'react';

function useTodos() {
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

    useEffect(async () => {
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

    return {
        allToDo, filteredTodo, status,
        addNewTodo, updateTodo, filterTodo
    };
}

export default useTodos;