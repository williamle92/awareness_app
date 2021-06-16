import React from 'react'
import TodoList from "./TodoList";
import './TodoTracker.css'

function TodoTracker() {
    return (
      <div className='todo-app'>
        <TodoList />
      </div>
    );
  }
  
  export default TodoTracker;