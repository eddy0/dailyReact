import {closeModal} from './modal'



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


const handleLogin = (creds, cb) => {
    return (dispatch)  => {
        dispatch(actionLogin(creds))
        dispatch(closeModal())
        cb()
    }
}


export {
    LOGIN_USER,
    LOGOUT_USER,
    actionLogin,
    actionLogout,
    handleLogin,
}