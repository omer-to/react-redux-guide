import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import {rootReducer} from './reducers'
import { acAdd} from './actions'

const store = createStore(rootReducer)
store.dispatch(acAdd("something idiotic"))
store.dispatch(acAdd(" learn redux"))
store.dispatch(acAdd("also react-redux "))
// store.dispatch(acToggle(1))
// store.dispatch(acFilter(FILTERS.SHOW_COMPLETED))
// console.log(store.getState())

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    ,
    document.querySelector("#root")
)
