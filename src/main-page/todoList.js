import React, { Component } from 'react';

class todoList extends Component {    
    actionTemplate = (todo, state) => {
        var template =
            <div className="col-1 todoAction"
                onClick={
                    () => {
                        todo.status = state;
                        this.props.updateTodo(todo);
                    }
                }>{state}</div>;
        return template;
    }

    render() {        
        //<React.Fragment></React.Fragment> => this could also be used to return multiple items from render method
        //What we used below is array based approach, downside to this approach is that we have to ensure that every item has a unique key value
        return (
            [
                <div className="row todoListHeader" key="blabla">
                    <div className="col-2">Status</div>
                    <div className="col-7">Text</div>
                    <div className="col-3">Actions</div>
                </div>,
                this.props.todos.map((todo) => {
                    return (
                        <div key={todo.id} className="row todoRow">
                            <div className="col-2 todoStatus">{todo.status}</div>
                            <div className="col-7">{todo.text}</div>
                            {this.actionTemplate(todo, 'done')}
                            {this.actionTemplate(todo, 'ongoing')}
                            {this.actionTemplate(todo, 'delete')}
                        </div>
                    );
                })
            ]
        );
    }
}

export default todoList;