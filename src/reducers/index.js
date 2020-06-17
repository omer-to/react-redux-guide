import {combineReducers} from 'redux'
import { recFilter } from './recFilter'
import { recTodo } from './recTodos'

export const rootReducer = combineReducers({
    todos: recTodo,
    filter: recFilter
})



