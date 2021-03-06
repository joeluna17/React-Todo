// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css'

const TodoList = props =>{ 
    return (
        <div className="todo-list-item-wrapper">
          
                <ul className= "list-item-wrapper">
                        {
                                props.list.map(todo => {
                                return <li className={`list-item ${todo.completed? "completed" : ""}`}
                                            key={todo.id}
                                            onClick={() => props.toggleStatus(todo.id)}
                                        >{todo.task}</li> 
                                })
                             
                        }
                </ul>
        </div>

    )
}


export default TodoList;

