import {combineReducers} from 'redux'
import events from './events'
import modal from './modal'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'


export default combineReducers({
    events,
    form: formReducer,
    modal,
    auth,
})