
import {actionLoadingError, actionLoadingFinish, actionLoadingStart} from './loading'
import {createNewEvent} from '../utils/helpers'

const ALL_EVENT = 'ALL_EVENT'
const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'
const FETCH_EVENT = 'FETCH_EVENT'
const RECEIVE_EVENTS = 'RECEIVE_EVENTS'

const actionReceiveEvents = (events) => {
    return {
        type: RECEIVE_EVENTS,
        events,
    }
}

const actionInitEvent = (events) => {
    return {
        type: ALL_EVENT,
        events,
    }
}

const actionCreateEvent = (event) => {
    return {
        type: CREATE_EVENT,
        event,
    }
}

const actionUpdateEvent = (event) => {
    return {
        type: UPDATE_EVENT,
        event,
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


const handleCreateEvent = (event) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch(actionLoadingStart())
    const firebase = getFirebase()
    const firestore = getFirestore()
    const user = firebase.auth().currentUser
    const {photoURL, displayName} = getState().firebase.profile
    let newEvent = createNewEvent({user, photoURL, displayName, event})
    console.log('newEvent', newEvent)
    try {
        let createEvent = await firestore.add(`events`, newEvent)
        await firestore.set(`event_user/${createEvent.id}_${user.uid}`, {
            eventId: createEvent.id,
            userUid: user.uid,
            eventDate: event.date,
            host: true,
        })

        dispatch(actionLoadingFinish())
    
    } catch(e) {
        console.log('e', e)
    }
}

const actionFetchUserEvent = (userId, activeTab) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    let today = new Date(Date.now())
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch(actionLoadingStart())
    let ref = firebase.firestore().collection('event_user')
    let query
    switch(activeTab) {
        case 'past':
            query = ref.where('userUid', '==', userId).where('eventDate', '<=', today).orderBy('eventDate', 'desc')
            break
        case 'future':
            query = ref.where('userUid', '==', userId).where('eventDate', '>=', today).orderBy('eventDate')
            break
        case 'host':
            query = ref.where('userUid', '==', userId).where('host', '==', true).orderBy('eventDate', 'desc')
            break
        default:
            query = ref.where('userUid', '==', userId).orderBy('eventDate', 'desc')
    }
    
    try {
        let querySnap = await query.get()
        console.log('querySnap', querySnap)
        let events = []
        for (let i = 0; i < querySnap.docs.length; i++) {
            let data = querySnap.docs[i].data()
            let event = await firebase.firestore().collection('events').doc(data.eventId).get()
            events.push({...event.data(), id: event.id})
        }
        dispatch(actionReceiveEvents(events))
        dispatch(actionLoadingFinish())
    }
    catch(e) {
        console.log('e', e)
        
    }
}

const actionJoinEvent = (event) =>  async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore()
    const firebase = getFirebase()
    const user = await firebase.auth().currentUser
    const {displayName, photoURL} = getState().firebase.profile
    const attendee = {
        going: true,
        joinDate: Date.now(),
        photoURL: photoURL || '/assets/user.png',
        displayName: displayName,
        host: false,
    }
    
    try {
        await firestore.update(`events/${event.id}`, {
            [`attendees.${user.uid}`]: attendee,
        })
        
        await firestore.set(`event_user/${event.id}_${user.uid}`, {
            eventId: event.id,
            userUid: user.uid,
            eventDate: event.date,
            host: false,
        })
    } catch(e) {
        console.log('e', e)
    }
}

const actionCancelJoin = (event) =>
    async (dispatch, getState, {getFirebase, getFirestore}) => {
    
        const firestore = getFirestore()
        const firebase = getFirebase()
        const user = firebase.auth().currentUser
        try {
            await firestore.update(`events/${event.id}`, {
                [`attendees.${user.uid}`]: firestore.FieldValue.delete(),
            })
            await firestore.delete(`event_user/${event.id}_${user.uid}`)
        } catch(e) {
            console.log('e', e)
        }
    }



export {
    RECEIVE_EVENTS,
    CREATE_EVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    ALL_EVENT,
    actionInitEvent,
    actionReceiveEvents,
    handleCreateEvent,
    actionFetchUserEvent,
    actionJoinEvent,
    actionCancelJoin,
}