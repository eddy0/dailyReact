import {LOG_OUT, LOGIN_IN} from '../action/auth'


 const auth = (state = {auth: false}, action) => {
    switch (action.type) {
        case LOGIN_IN:
            return {
                ...state,
                auth: true,
                user: action.info
            }
        case LOG_OUT:
            return {
                ...state,
                auth: false,
                user: {}
            }
        default:
            return state
    }
}


export {auth as default}