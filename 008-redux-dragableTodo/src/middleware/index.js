
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const filter = (store) => (next) => (action) => {
    if (action.type === 'ADD_TODO' && action.todo.task.indexOf('iiui') > -1 ) {
        alert('pooooooop!!💩💩💩')
        return
    }
    
    return next(action)
    
}



export default applyMiddleware(filter, thunk)


