import {CREATE_EVENT, DELETE_EVENT, FETCH_EVENT, UPDATE_EVENT} from '../actions/events'



const eventsReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_EVENT:
            return  action.event
        case CREATE_EVENT:
            return [...state, action.event]
        case DELETE_EVENT:
            return state.filter((event) => event.id !== action.id)
        case UPDATE_EVENT:
            return state.map((event) => {
                if (event.id === action.event.id) {
                    return Object.assign({}, event, action.event)
                } else {
                    return event
                }
            })
        default:
            return state
    }
}

export default eventsReducer

