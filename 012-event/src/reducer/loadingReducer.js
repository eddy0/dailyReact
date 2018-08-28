import {LOADING_ERROR, LOADING_FINISH, LOADING_START} from '../action/loading'



const loading = (state = false, action) => {
    switch(action.type) {
        case LOADING_START:
            return true
        case LOADING_FINISH:
            return false
        case LOADING_ERROR:
            return false
        default:
            return state
    }
}

export {loading as default}