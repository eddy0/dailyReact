import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import users from './user'
import events from './event'


export default combineReducers({
    events,
    users,
    loadingBar: loadingBarReducer,
})