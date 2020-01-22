import React, { useState } from 'react';

// Reducer

const Form = (props) => {
  const [todo, setTodo] = useState('');

  const handleChanges = (e) => {
    setTodo(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    props.dispatch({type: 'ADD_TODO', payload: todo});
    setTodo('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Add A Todo:
          <input
            type="text"
            name="name"
            value={todo}
            onChange={handleChanges}
          />
        </label>
        <input 
          type="submit"
          value="Submit"
        />
        <button onClick={() => props.dispatch({type: 'CLEAR_TODOS'})}>Clear Todos</button>
      </form>
    </>
  )
}

export default Form;