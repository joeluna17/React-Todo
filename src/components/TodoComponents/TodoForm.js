import React from 'react'
import './Todo.css';

const TodoForm = props => {

        return (
                <div className="from-wrapper">
                    <form className="form" onSubmit={props.addTodoItem}>
                            <input
                                type="text"
                                placeholder="add todo...."
                                name = "task"
                                value = {props.task}
                                onChange = {props.changeHandler}
                            />
                    <button onClick={props.addTodoItem}>Add Todo</button>
                    <button onClick={props.clearCompleted}>Clear Completed</button>
                    </form>
                 </div>

        )

}

export default TodoForm;


