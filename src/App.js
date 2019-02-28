import React from 'react';
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { connect } from 'react-redux'

class App extends React.Component {

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <TodoList></TodoList>
        <AddTodo></AddTodo>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
      todos: state.todos
  }
}

export default connect(mapStateToProps)(App)
