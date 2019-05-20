import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


//Object Data Todos'
const todosData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super()
  this.state = {
    todos: todosData,
    task:"",
    id:"",
    completed:false,
  }
}

changeHandler = event => {
    this.setState({
        [event.target.name] : event.target.value 
    });
}

addTodoItem = event => {
  event.preventDefault();
  let newTodo = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
  }

  this.setState({
      todos: [...this.state.todos, newTodo],
      task:"",
  })
}

  toggleStatus = id => {
    this.setState({
      todos: this.state.todos.map(todo =>{
          if (id === todo.id){
              return {
                  ...todo, // here we are saying that we need to return every item that we are mapping over this is the spread operator
                  completed : !todo.completed
              }
          }
          return todo;
      })
  });
    
}

clearCompleted = event => {
  event.preventDefault();
    this.setState({
        todos:  this.state.todos.filter(todo => !todo.completed)
    })
}


  render() {
    return (
      <div>
          <h1> Todo List:</h1>
        <TodoForm 
            task = {this.state.task}
            id = {this.state.id}
            completed = {this.state.completed}
            changeHandler = {this.changeHandler}
            addTodoItem = {this.addTodoItem} 
            clearCompleted = {this.clearCompleted}
        />
         
         <TodoList list = {this.state.todos} 
                  toggleStatus = {this.toggleStatus}
         />
      </div>
    );
  }
}

export default App;
