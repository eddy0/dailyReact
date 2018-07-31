import {combineReducers} from 'redux'
import {loadingReducer} from '../LoadingBar'

const todo = (state={}, action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return {
                ...state,
                ...action.todo
            }
        default:
            return state
    }
}


export default combineReducers({
    todo,
    loading: loadingReducer,
})
