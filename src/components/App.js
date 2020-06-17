import React, { Component } from 'react'
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'
import AddTodo from './AddTodo'


export default class App extends Component {
    
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        )
    }
}
