import {LOGIN_USER, LOGOUT_USER} from '../actions/auth'



const auth = (state={authenticated: false}, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                authenticated: true,
                currentUser: action.creds.email,
            }
        case LOGOUT_USER:
            return {
                ...state,
                authenticated: false,
                currentUser: {},
            }
        default:
            return state
    }
}

export default auth