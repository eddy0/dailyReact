import React from 'react'
import {connect} from './reduxLibrary'
import {handleInitialData, handleActionAddTodo} from '../action/todo'
import TodoList from './TodoList'

/*
class ConnectTodo extends React.Component {

    render() {
        return (
            <Consumer>
                {
                    (store) => {
                        return (
                            <div>
                                <Component store={store} />
                            </div>
                        )
                    }
                }
            </Consumer>
        )
    }
}


class Component extends React.Component {

    componentDidMount() {
        this.props.store.subscribe(() => this.forceUpdate())
    }

    render() {
        return (
            <Todo store={this.props.store} />
        )
    }
}

*/


class Todo extends React.Component {
    
    componentDidMount() {
        const {dispatch} = this.props
        dispatch(handleInitialData())
    }
    
    handleAddTodo = (e) => {
        e.preventDefault()
        let value = this.input.value
        if (value.trim()) {
            this.props.dispatch(handleActionAddTodo(value, () => {
                this.input.value = ''
            }))
        } else {
            alert('pls type more than one charactor')
            this.input.value = ''
        }
       
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={(input) => this.input = input} />
                <button onClick={this.handleAddTodo}>add todo</button>
                <hr/>
                <TodoList />
            </div>
        )
    }
}


export default connect()(Todo)