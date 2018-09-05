import {actionCloseModal} from './modal'
import { SubmissionError, reset } from 'redux-form';

const LOGIN_IN = 'LOGIN_IN'
const LOG_OUT = 'LOG_OUT'

const actionLogin = (info) => {
    return {
        type: LOGIN_IN,
        info
    }
}

const actionLogout = (info) => {
    return {
        type: LOG_OUT,
        info
    }
}

const handleActionLogin = (form) => async (dispatch, getStatte, {getFirebase}) => {
    const firebase = getFirebase()
    
    try {
        await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
        dispatch(actionLogin(form))
        dispatch(actionCloseModal())
    } catch (error) {
        console.log('error', error)
        throw new SubmissionError({_error: error.message})
    }
}

const handleRegister = (user) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
 
        await createdUser.user.updateProfile({
            displayName: user.displayName,
        })
        let newUser = {
            displayName: user.displayName,
            createAt: firestore.FieldValue.serverTimestamp()
        }
        await firestore.set(`users/${createdUser.user.uid}`, {...newUser} )
        dispatch(actionCloseModal())
    } catch(error) {
        console.log('error', error)
        throw new SubmissionError({_error: error.message})
    }
}


const handleSocialLogin = (provider) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()

    try {
        dispatch(actionCloseModal())
        let user = await firebase.login({
            provider: provider,
            type: 'popup',
        })
        console.log('user', user)

        if (user.additionalUserInfo.isNewUser) {
            await firestore.set(`users/${user.user.uid}`, {
                displayName: user.profile.displayName,
                photoURL: user.profile.avatarUrl,
                createAt: firestore.FieldValue.serverTimestamp()
            })
        }

    } catch (error) {
        console.log('error', error)
        throw new SubmissionError({_error: error.message})

    }
}


export {
    LOGIN_IN,
    LOG_OUT,
    handleActionLogin,
    handleSocialLogin,
    handleRegister,

}