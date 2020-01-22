import React from 'react';

const Todo = (props) => {

  return(
    <>
      <div>
        <h1 
          style={props.completed ? {textDecoration: 'line-through'} : {textDecoration: 'none'}} 
          onClick={() => props.dispatch({type: 'COMPLETE_TODO', payload: props.id})}
        >{props.item}</h1>
      </div>
    </>
  )
}

export default Todo;