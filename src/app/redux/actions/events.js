import cuid from 'cuid'



const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'


const createEvent = (event) => {
    return {
        type: CREATE_EVENT,
        event,
    }
}

const updateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        event,
    }
}

const deleteEvent = (id) => {
    return {
        type: DELETE_EVENT,
        id,
    }
}

const handleCreateEvent = (event) => {
    return (dispatch) => {
        event.id = cuid()
        event.hostPhotoURL = '/assets/user.png'
        event.attendees = []
        dispatch(createEvent(event))
        return Promise.resolve()
    }
}

const handleUpdateEvent = (event, cb) => {
    return (dispatch) => {
        dispatch(updateEvent(event))
        cb()
    }
}

const handleDeleteEvent = (id, cb) => {
    return (dispatch) => {
        dispatch(deleteEvent(id))
        cb()
    }
}

export {
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    createEvent,
    updateEvent,
    deleteEvent,
    handleCreateEvent,
    handleUpdateEvent,
    handleDeleteEvent,
}