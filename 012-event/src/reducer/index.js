import {combineReducers} from 'redux'
import {ALL_EVENT, DELETE_EVENT} from '../action/event'
import {loadingReducer} from 'light-redux-loading'



const events = (state=[], action) => {
    switch(action.type) {
        case ALL_EVENT:
            return action.events
        case DELETE_EVENT:
            return state.filter((event) => event.id !== action.id)
        default:
            return state
    }
}


export default combineReducers({
    events,
    loading: loadingReducer,
})