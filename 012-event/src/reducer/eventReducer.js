import {RECEIVE_EVENTS} from '../action/event'


const events = (state=[], action ) => {
    switch (action.type) {
        case RECEIVE_EVENTS:
            return action.events
        default:
            return state
    }
}

export {events as default}