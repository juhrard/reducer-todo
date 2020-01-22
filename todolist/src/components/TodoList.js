import React from 'react';

// Components
import Todo from './Todo';
const TodoList = (props) => {
  console.log('state inside todolist: ', props)
  return (
    <>
      <div>
        {props.todos.map(todo => (
        <Todo item={todo.item} id={todo.id} dispatch={props.dispatch} completed={todo.completed}/>
        ))}
      </div>
    </>
  )
}

export default TodoList;