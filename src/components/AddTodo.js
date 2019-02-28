import React from 'react'
import { connect } from 'react-redux'
import { addNewTodo } from '../actions/addNewTodo'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            input: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatchedAction } = this.props;
        console.log('this.props:',this.props);
        // console.log('this.state.input in AddTodo:',this.state.input)
        dispatchedAction(this.state.input);

        this.setState({
            input: ''
        });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label id='label1'>Add new todo:</label>
                    <input id='input' type="text" onChange={this.handleChange} value={this.state.input} />
                </form>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state in AddTodo:',state);
    // console.log('ownProps in AddTodo:',ownProps);
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(dispatch);
    return {
        dispatchedAction: (data) => { dispatch(addNewTodo(data)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo)
