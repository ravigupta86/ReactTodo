import React from 'react';
//TODO: Check if having useState statement here makes sense, despite having the same in separate hooks file 
import { useState } from 'react';

function getGuid() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

const AddNewTodo = (props) => {
    const [todoInput, setTodoInput] = useState('');

    var addNew = (props) => {
        if (todoInput) {
            props.addNewTodo({
                "id": getGuid(),
                "text": todoInput,
                "status": "new"
            });
            setTodoInput('');
        } else {
            //todoInputBox.current.focus();
            //TODO: find some mechanism for getting focus on textbox without use createRef
        }
    }

    const handleChange = (event) => {
      setTodoInput(event.target.value);
    }

    var handleKeyDown = (e, props) => {
        if (e.key === 'Enter') {
            addNew(props);
        }
    }

    return (
        <div className="row">
            <div className="col-2">Add Todo:</div>
            <div className="col-8">
                <input type="text" id="toDoBox" className="addToDoBox" placeholder="Add todo..." value={todoInput} 
                    onChange={handleChange} onKeyDown={(e) => { handleKeyDown(e, props) }} />
            </div>
            <div className="col-2">
                <button type="button" onClick={() => { addNew(props); }}>Add</button>
            </div>
        </div>
    );
}

export default AddNewTodo;