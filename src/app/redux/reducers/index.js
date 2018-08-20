import {combineReducers} from 'redux'
import events from './events'
import modal from './modal'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import loading from './loading'
import {reducer as toastr} from 'react-redux-toastr'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'



export default combineReducers({
    events,
    form: formReducer,
    modal,
    auth,
    loading,
    toastr,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})