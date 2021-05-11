import React, { Component } from 'react';

class addNewTodo extends Component {
    state = {}

    todoInputBox = React.createRef();

    getGuid() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    addNew = (event) => {
        if (this.todoInputBox.current.value) {
            this.props.addNewTodo({
                "id": this.getGuid(),
                "text": this.todoInputBox.current.value,
                "status": "new"
            });
            this.todoInputBox.current.value = '';
        } else {
            this.todoInputBox.current.focus();
        }
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.addNew(e);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-2">Add Todo:</div>
                <div className="col-8">
                    <input ref={this.todoInputBox} type="text" id="toDoBox" className="addToDoBox" 
                            placeholder="Add todo..." onKeyDown={this.handleKeyDown} />
                </div>
                <div className="col-2">
                    <button type="button" onClick={this.addNew}>Add</button>
                </div>
            </div>
        );
    }
}

export default addNewTodo;