const ALL_EVENT = 'ALL_EVENT'
const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'
const FETCH_EVENT = 'FETCH_EVENT'

const actionInitEvent = (events) => {
    return {
        type: ALL_EVENT,
        events
    }
}


const actionCreateEvent = (event) => {
    return {
        type: CREATE_EVENT,
        event
    }
}

const actionUpdateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        event
    }
}

const actionDeleteEvent = (id) => {
    return {
        type: DELETE_EVENT,
        id,
    }
}

const actionDetailEvent = (id) => {
    return {
        type: FETCH_EVENT,
        id,
    }
}


export {
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    ALL_EVENT,
    actionInitEvent,
}