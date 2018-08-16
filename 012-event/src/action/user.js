import {setAuthUser} from './auth'
import {getUser} from '../utils/api'


const RECEIVE_USERS = 'RECEIVE_USER'
const LOGIN_USER = 'LOGIN_USER'
const SIGN_OUT_USER = 'SIGN_OUT_USER'




const actionLoginUSER = (form) => {
    return {
        type: LOGIN_USER,
        form,
    }
}

const handleLogin = (form, callback) => {
    return (dispatch) => {
        getUser(form).then((user) => {
            dispatch(actionLoginUSER(user))
            dispatch(setAuthUser(user.id))
        }).catch(() => {
            callback()
        })
    }
}

const actionReceiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export {
    RECEIVE_USERS,
    actionReceiveUsers,
    LOGIN_USER,
    SIGN_OUT_USER,
    handleLogin,

}