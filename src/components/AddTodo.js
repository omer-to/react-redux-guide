import React, { Component } from 'react'
import { connect } from 'react-redux'
import { acAdd } from '../actions'

class AddTodo extends Component {
    
    inputRef = React.createRef()

    render() {
        return (
            <div>
                <form onSubmit = {e => {
                    e.preventDefault()
                    this.props.dAcTodo(this.inputRef.current.value)
                    
                }}>
                    <input
                    type = "text"
                    placeholder = "Add a Todo..."
                    ref = {this.inputRef}
                    
                    />
                    {/* value = {this.state.text}
                    onChange = {e => this.setState({ text: e.target.value})} */}
                </form>    
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    
    return {
        dAcTodo : todo => dispatch(acAdd(todo))
    }
}

export default connect(null, mapDispatchToProps)(AddTodo)
