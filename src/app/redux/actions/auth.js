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


const handleLogin = (creds) => {
    return (dispatch)  => {
        dispatch(actionLogin(creds))
        dispatch(closeModal())
    }
}


export {
    LOGIN_USER,
    LOGOUT_USER,
    actionLogin,
    actionLogout,
    handleLogin,
}