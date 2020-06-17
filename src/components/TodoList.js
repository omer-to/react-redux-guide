import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends Component {
    render() {
        const {todos, dispatchToggle} = this.props
        // console.log(todos)
        
        return (
            <div>
                {todos.map(
                    item => (
                        <Todo 
                            key = {item.id}
                            {...item}
                            callbackOnClick = { () => dispatchToggle(item.id) }
                        />
                    )
                )}
            </div>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            todo: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    
}

export default TodoList
