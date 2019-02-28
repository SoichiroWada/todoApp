import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions/deleteTodo'

const TodoList = (props) => {
    const { todos, deleteTodo } = props;
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" id="div1" key={todo.id} >
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left, yay!</p>
    )
    return (
        <div>
            <div className="todos collection">
                {todoList}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log('state in Todos:',state);
    // console.log('state in TodoList:',state.todos);
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // deletePost: (id) => { dispatch({type:'DELETE_POST', id:id}) }
        deleteTodo: (id) => { dispatch(deleteTodo(id)) }
    }
}

// export default connect(mapStateToProps, )(TodoList)
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
