export const initialState = {todos: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]}

export function simpleReducer(state, action) {
  console.log(state);
  switch(action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}] }
    case 'COMPLETE_TODO':
      return { todos: [...state.todos.filter(todo => {
        if(todo.id === action.payload) {
          return todo.completed = !todo.completed;
        } else {
          return todo;
        }
      })]}
    case 'CLEAR_TODOS':
      return { todos: [...state.todos.filter(todo => {
        if(todo.completed === false) {
          return todo;
        }
      })]}
    default:
      return state
  }
}