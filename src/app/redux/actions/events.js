import {createNewEvent, fetchData} from '../../utils/api'
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

const handleCreateEvent = (event) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const user = firebase.auth().currentUser
    
    const {photoURL, displayName} = getState().firebase.profile
    
    let newEvent = createNewEvent({user, photoURL, displayName, event})
    console.log('newEvent', newEvent)
    
    try {
        let createEvent = await firestore.add(`events`, newEvent)
        console.log('createEvent', createEvent)
    
        // await firestore.add(`events/${createEvent.id}`, {
        //     id: createEvent.id
        // })
        await firestore.set(`attendees/${createEvent.id}_${user.uid}`, {
            eventId: createEvent.id,
            userUid: user.uid,
            eventDate: event.date,
            host: true,
        })
        toastr.success('Sucess', 'You have created the events')
    } catch(e) {
        console.log('e', e)
        
    }
}

const handleUpdateEvent = (event, cb) => async (dispatch, getState, { getFirestore}) => {
    const firestore = getFirestore()
    
    try {
       await firestore.update(`events/${event.id}`, event)
        toastr.success('Sucess', 'You have updated the events')
        cb()
    } catch(e) {
        console.log('e', e)
    }
}

const handleDeleteEvent = (id, cb) => {
    return (dispatch) => {
        dispatch(deleteEvent(id))
        cb()
    }
}

const handleToggleCancelEvent = (event, cb)=> async (dispatch, getState, { getFirestore}) => {
    const firestore = getFirestore()
    let cancelled = event.cancelled
    if (cancelled === undefined) {
        cancelled = false
    }
    
    try {
        await firestore.update(`events/${event.id}`, {
            cancelled: !cancelled
        })
        toastr.success('Sucess', 'You have cacelled the events')
        cb()
    } catch(e) {
        console.log('e', e)
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
    handleToggleCancelEvent,
}