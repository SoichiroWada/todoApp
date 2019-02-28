
const initState = {
    todos: [
        {id:1, content:'buy some milk'},
        {id:2, content:'play mario kart'},
        {id:3, content:'walk along the street'},
        {id:4, content:'here comes the sun'},
        {id:5, content:'make up your face'},
        {id:6, content:'climb Mt.Fuji'},
        {id:7, content:'blowing wind'},
        {id:8, content:'eat meat'}
      ]
  }

const rootReducer = (state = initState, action) => {
    // console.log('action in reducer:', action)
    // console.log('state.todos in reducer:', state)
    // console.log('state in reducer:', state.todos)
    if (action.type === 'ADD_TODO'){
        var newTodo = {
            id:action.id,
            content:action.content
        }
        let newTodos = [...state.todos, newTodo];
        return {
            ...state,
            todos: newTodos
        }
    }
    else if (action.type === 'DELETE_TODO'){
        let newTodos = state.todos.filter(todo => {
            return todo.id !== action.id
        });
        return {
            ...state,
            todos: newTodos
        }
    }

    return state;
}

export default rootReducer
