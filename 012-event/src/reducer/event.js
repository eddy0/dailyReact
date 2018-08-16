import {ALL_EVENT, CREATE_EVENT, DELETE_EVENT, RECEIVE_EVENTS} from '../action/event'


const events = (state={}, action) => {
    switch(action.type) {
        case RECEIVE_EVENTS:
            return {
                ...state,
                ...action.events
            }
        case CREATE_EVENT:
            return {
                ...state,
                ...action.event
            }
        case ALL_EVENT:
            return action.events
        case DELETE_EVENT:
            return state.filter((event) => event.id !== action.id)
        default:
            return state
    }
}

export default events

