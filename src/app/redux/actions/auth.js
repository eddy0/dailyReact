import {closeModal} from './modal'
import {toastr} from 'react-redux-toastr'
import { SubmissionError, reset } from 'redux-form';


const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const actionLogin = (creds) => {
    return {
        type: LOGIN_USER,
        creds,
    }
}

const actionLogout = (creds) => {
    return {
        type: LOGOUT_USER,
        creds,
    }
}

// redux-thunk config了 firebase， 可以用 firebase 的其他的值
// 注意, 下面的 error 是由下划线的
const handleLogin = (creds) => {
    return async (dispatch, getState, {getFirebase})  => {
        dispatch(actionLogin(creds))
        const firebase = getFirebase()
        try {
            await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password)
            dispatch(closeModal())
            toastr.success('Sucess', 'Welcome Back')
        } catch(error) {
            console.log('error', error)
            throw new SubmissionError({_error: error.message})
        }
        
    }
}

const handleRegister = (user) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    try {
        console.log('uuuser', user)
        // create use in auth
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        // console.log('user', createdUser,  createdUser.user)
        // update in auth profile
        await createdUser.user.updateProfile({
            displayName: user.displayName,
        })
        //  crate a new profile in firestore
        let newUser = {
            displayName: user.displayName,
            createAt: firestore.FieldValue.serverTimestamp()
        }
        await firestore.set(`users/${createdUser.user.uid}`, {...newUser} )
        dispatch(closeModal())
    } catch(error) {
        console.log('error', error)
        throw new SubmissionError({_error: error.message})
    }
}

const handleSocialLogin = (provider) => {
    return async (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
    
        try {
            dispatch(closeModal())
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
            
        } catch(error) {
            console.log('error', error)
            throw new SubmissionError({_error: error.message})
    
        }
    }
}

const updatePassword = (creds) => async (dispatch, getState, {getFirebase,}) => {
    const firebase = getFirebase()
    const auth = firebase.auth().currentUser
    try {
        await auth.updatePassword(creds.newPassword1)
        await dispatch(reset('account'))
        toastr.success('Sucess', 'you have updated the password')
    } catch(error) {
        console.log('error', error)
        throw new SubmissionError({_error: error.message})
    
    }
    
    
}


export {
    LOGIN_USER,
    LOGOUT_USER,
    actionLogin,
    actionLogout,
    handleLogin,
    handleRegister,
    handleSocialLogin,
    updatePassword,
}