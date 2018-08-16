import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import users from './user'
import events from './event'
import auth from './auth'

export default combineReducers({
    events,
    users,
    loadingBar: loadingBarReducer,
    auth,
})