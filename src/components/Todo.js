import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
    render() {
        
        const { completed, todo, callbackOnClick} = this.props
        return (
            <li 
                onClick = {callbackOnClick}
                style = {{textDecoration : completed ? 'line-through' : 'none'}}
            >
            
                {todo}

            </li>    
        )
    }
}

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    todo: PropTypes.string.isRequired,
    callbackOnClick: PropTypes.func.isRequired
}

export default Todo
