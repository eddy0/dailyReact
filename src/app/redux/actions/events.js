import cuid from 'cuid'
import {fetchData} from '../../utils/api'
import {actionLoadingError, actionLoadingFinish, actionLoadingStart} from './loading'
import {toastr} from 'react-redux-toastr'


const FETCH_EVENT = 'FETCH_EVENT'
const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'

const actionFetchEvent = (event) => {
    return {
        type: FETCH_EVENT,
        event,
    }
}

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

const handleFetchEvent = (event) => {
    return async (dispatch) => {
        try {
            dispatch(actionLoadingStart())
            let events = await fetchData()
            dispatch(actionFetchEvent(events))
            dispatch(actionLoadingFinish())
            
        } catch(error) {
            console.log('fetch error', error)
            dispatch(actionLoadingError())
        }
        
    }
}

const handleCreateEvent = (event) => {
    return (dispatch) => {
        event.id = cuid()
        event.hostPhotoURL = '/assets/user.png'
        event.attendees = []
        dispatch(createEvent(event))
        toastr.success('Sucess', 'You have created the events')
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
    FETCH_EVENT,
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    createEvent,
    updateEvent,
    deleteEvent,
    handleFetchEvent,
    handleCreateEvent,
    handleUpdateEvent,
    handleDeleteEvent,
}