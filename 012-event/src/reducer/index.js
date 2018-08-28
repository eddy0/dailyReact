import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import modal from './modalReducer'
import {reducer as formReducer} from 'redux-form'
import auth from './authReducer'
import loading from './loadingReducer'


export default combineReducers({
    auth: auth,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
    modal: modal,
    loading: loading,

})