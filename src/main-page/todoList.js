import React, { Component } from 'react';
import deleteIcon from '../assets/images/delete.png';
import doneIcon from '../assets/images/done.png';
import ongoingIcon from '../assets/images/ongoing.png';

var actionTemplate = (todo, state, iconImg, updateTodo) => {
    var template =
        <div className="col-1 todoAction"
            onClick={
                () => {
                    todo.status = state;
                    updateTodo(todo);
                }
            }><img alt={state} className="actionIcon" src={iconImg} /> </div>;
    return template;
}

const TodoList = ({ todos, updateTodo }) => {
    //using destructuring syntax to get props, here we destructured props in function params itself
    // const { todos, updateTodo } = props;
    return (
        [
            <div className="row todoListHeader" key="blabla">
                <div className="col-2">Status</div>
                <div className="col-7">Text</div>
                <div className="col-3">Actions</div>
            </div>,
            todos.map((todo) => {
                return (
                    <div key={todo.id} className="row todoRow">
                        <div className="col-2 todoStatus">{todo.status}</div>
                        <div className="col-7">{todo.text}</div>
                        {actionTemplate(todo, 'done', doneIcon, updateTodo)}
                        {actionTemplate(todo, 'ongoing', ongoingIcon, updateTodo)}
                        {actionTemplate(todo, 'delete', deleteIcon, updateTodo)}
                    </div>
                );
            })
        ]
    );
}

export default TodoList;

// class todoList extends Component {    
//     actionTemplate = (todo, state, iconImg) => {
//         var template =
//             <div className="col-1 todoAction"
//                 onClick={
//                     () => {
//                         todo.status = state;
//                         this.props.updateTodo(todo);
//                     }
//                 }><img alt={state} className="actionIcon" src={iconImg} /> </div>;
//         return template;
//     }

//     render() {        
//         //<React.Fragment></React.Fragment> => this could also be used to return multiple items from render method
//         //What we used below is array based approach, downside to this approach is that we have to ensure that every item has a unique key value
//         return (
//             [
//                 <div className="row todoListHeader" key="blabla">
//                     <div className="col-2">Status</div>
//                     <div className="col-7">Text</div>
//                     <div className="col-3">Actions</div>
//                 </div>,
//                 this.props.todos.map((todo) => {
//                     return (
//                         <div key={todo.id} className="row todoRow">
//                             <div className="col-2 todoStatus">{todo.status}</div>
//                             <div className="col-7">{todo.text}</div>
//                             {this.actionTemplate(todo, 'done', doneIcon)}
//                             {this.actionTemplate(todo, 'ongoing', ongoingIcon)}
//                             {this.actionTemplate(todo, 'delete', deleteIcon)}
//                         </div>
//                     );
//                 })
//             ]
//         );
//     }
// }

// export default todoList;