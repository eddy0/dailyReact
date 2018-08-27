import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {getFirebase} from 'react-redux-firebase'
import {getFirestore} from 'redux-firestore'
import {firebaseMiddleware, firestoreMiddleware} from './firebase'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    firebaseMiddleware,
    firestoreMiddleware,
)