import firebase, {firestore} from '../firebase/index'
import { reduxFirestore} from 'redux-firestore'
import {reactReduxFirebase} from 'react-redux-firebase'



export const reduxConfig = {
    // collection within Firestore to which user profiles are written (would be
    // RTDB without useFirestoreForProfile)
    userProfile: 'users',
    // Profile data is located within Firestore instead of Real Time Database
    useFirestoreForProfile: true,
    // place metadata about storage uploads into Firestore
    // when calling uploadFiles or uploadFile with a third argument
    useFirestoreForStorageMeta: true,
    enableLogging: false, // enable/disable Firebase Database Logging
    updateProfileOnLogin: false, // enable/disable updating of profile on login
    attachAuthIsReady: false
    // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
}

export const firebaseMiddleware = reactReduxFirebase(firebase, reduxConfig )

export  const firestoreMiddleware = reduxFirestore(firebase, reduxConfig)
