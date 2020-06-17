import {actionTypes} from '../actions'

// State is an array of objects
// Action is an object with either paylod: {text, id} or payload: {id}
export const recTodo = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [...state, {todo: action.payload.text, id: action.payload.id, completed: false}]
        case actionTypes.TOGGLE_TODO:
            return state.map(todo => 
                (todo.id === action.payload)
                ? {...todo, completed: !todo.completed}
                : todo
                )
        default:
            return state
    }
}
