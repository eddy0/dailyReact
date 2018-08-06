import React from 'react'
import {connect} from './reduxLibrary'
import {actionToggleTodo, actionDeleteTodo, handleSortTodo} from '../action/todo'
const log = console.log.bind(console)



class TodoList extends React.Component {
    handleToggleTodo = (id) => {
        this.props.dispatch(actionToggleTodo(id))
        
    }
    
    handleDeleteTodo = (id) => {
        this.props.dispatch(actionDeleteTodo(id))
    }
    
    handleDragStart = (event) => {
        event.target.style.opacity = 0.4
        event.dataTransfer.effectAllow = 'move'
        this.element = event.target
    }
    
    handleDragEnter = (e) => {
        e.preventDefault()
        e.target.classList.add('over')
    }
    
    handleDragLeave = (e) => {
        e.preventDefault()
        e.target.classList.remove('over')
    }
    
    handleDragOver = (e) => {
        e.preventDefault()
        e.dataTransfer.dropEffect = 'move'
    }
    
    handleDrop = (event) => {
        this.element.style.opacity = 1
        event.target.classList.remove('over')
        // let start = Number(this.element.dataset.order)
        // let end = Number(event.target.dataset.order)
        let start = [...event.target.parentNode.children].findIndex((node) => node === this.element)
        let end = [...event.target.parentNode.children].findIndex((node) => node === event.target)
        this.props.dispatch(handleSortTodo(start, end))
    }
    
    render() {
        return (
            <ul >
                {
                    this.props.todo.map((item, i) => (
                        <li key={item.id}
                            style={{textDecoration: item.done?'line-through': '',}}
                            draggable={true}
                            data-order={item.order}
                            aria-describedby='operation'
                            onDragStart={this.handleDragStart}
                            onDragOver={this.handleDragOver}
                            onDragEnter={this.handleDragEnter}
                            onDragLeave={this.handleDragLeave}
                            onDrop={this.handleDrop}
                        >
                            {item.task}
                            <div draggable={false} >
                                <button onClick={() => this.handleToggleTodo(item.id)}>done</button>
                                <button onClick={() => this.handleDeleteTodo(item.id)}>delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        )
    }
}



const mapStateToProps = ({todo}) => {
    return {
        todo: todo,
    }
}

export default connect(mapStateToProps)(TodoList)