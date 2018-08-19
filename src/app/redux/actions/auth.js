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



export {
    LOGIN_USER,
    LOGOUT_USER,
    actionLogin,
    actionLogout,
}