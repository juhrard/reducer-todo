import React, { useReducer } from 'react';
import './App.css';

// Components
import TodoList from './components/TodoList';
import Form from './components/Form';


// Reducer
import { simpleReducer, initialState } from './reducers/simpleReducer';

function App() {

  const [state, dispatch] = useReducer(simpleReducer, initialState)
  return (
    <div className="App">
      <TodoList todos={state.todos} dispatch={dispatch}/>
      <Form todos={state.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
