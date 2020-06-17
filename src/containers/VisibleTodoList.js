import {FILTERS, acToggle} from '../actions'
import {connect} from 'react-redux'
import TodoList from '../components/TodoList'



const mapStateToProps = (state) => {
    return ({
        todos: state.todos.filter(todo => {
            switch (state.filter) {
                case (FILTERS.SHOW_ACTIVE):
                    return !todo.completed
                case (FILTERS.SHOW_COMPLETED):
                    return todo.completed 
                default:
                    return true
            }
        })
    })
}

const mapDispatchToProps = dispatch => {
    
    return ({
        dispatchToggle: id => dispatch(acToggle(id))
    })
}


const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default VisibleTodoList
