import {ALL_TODOS, ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, SORT_TODO} from '../action/todo'


const generateOrder = (state) => {
    let len = state.length
    if (len > 0) {
        return state[len - 1].order + 1
    } else {
        return 0
    }
}

const todo = (state=[], action) => {
    switch(action.type) {
        case ALL_TODOS:
            return state.concat(action.todo)
        case ADD_TODO:
            let order = generateOrder(state)
            return state.concat(Object.assign(action.todo, {order: order}))
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        // case SORT_TODO:
        //     return state.map((todo) => {
        //          if (todo.order === action.start) {
        //             return Object.assign({}, todo, {order: action.end })
        //         } else if (todo.order === action.end) {
        //             return Object.assign({}, todo, {order: action.start})
        //         } else {
        //              return todo
        //          }
        //     })

        case SORT_TODO:
            let newState = [...state]
            let {start, end} = action
            if (start > end) {
                [start, end] = [end, start]
            }

            return [...newState.slice(0, start), ...newState.slice(start + 1, end + 1), newState[start], ...newState.slice(end + 1) ]

            // console.log('ord', newState, newState[start],  newState[end])
            //
            // newState.splice(start, 1)
            // console.log('new', newState)
            // newState.splice(end, 0,  newState[start])
            // console.log('insert', newState)

            // return newState
        case TOGGLE_TODO:
            return state.map((todo) => {
                return todo.id !== action.id
                    ? todo
                    : Object.assign({}, todo, {done: !todo.done})
            })
        case UPDATE_TODO:
            return state.map((todo) => {
                return todo.id !== action.todo.id
                    ? todo
                    : Object.assign({}, todo, {task: action.todo})
            })
        default:
            return state
    }
}


export default todo