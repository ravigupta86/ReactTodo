const TodoSummary = (allTodo) => {
    return (
        <div>
            <h5>Summary</h5>
            <p>Todo Count: {allTodo.allToDo.length}</p>
        </div>
    );
}
 
export default TodoSummary;