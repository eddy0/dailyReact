import {fetchTodo, generateId} from '../helper'
import {showLoading, hideLoading} from '../component/LoadingLibrary'

const ALL_TODOS = 'ALL_TODOS'
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
const UPDATE_TODO = 'UPDATE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const SORT_TODO = 'SORT_TODO'

const actionAddTodo = (task) => {
    return {
        type: ADD_TODO,
        todo: {
            id: generateId(),
            task: task,
            done: false,
        }
    }
}

const handleActionAddTodo = (task, callback) => {
    return (dispatch) => {
        dispatch(actionAddTodo(task))
        let todo =  actionAddTodo(task)
        callback(todo.todo)
    }
}

const actionAllTodo = (todo) => {
    return {
        type: ALL_TODOS,
        todo: todo,
    }
}

const actionUpdateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        todo: todo,
    }
}

const actionToggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        id: id,
    }
}


const actionDeleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id,
    }
}



// get all todo
const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        fetchTodo().then((todos) => {
            dispatch(actionAllTodo(todos))
            dispatch(hideLoading())
        })
    }
}

const handleSortTodo = (start, end) => {
    return {
        type: SORT_TODO,
        start,
        end,
    }
}

export {
    ALL_TODOS,
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
    TOGGLE_TODO,
    SORT_TODO,
    actionAddTodo,
    actionDeleteTodo,
    actionToggleTodo,
    actionUpdateTodo,
    handleInitialData,
    handleActionAddTodo,
    handleSortTodo,
}