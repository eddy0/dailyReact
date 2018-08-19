import {combineReducers} from 'redux'
import events from './events'
import modal from './modal'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import loading from './loading'

export default combineReducers({
    events,
    form: formReducer,
    modal,
    auth,
    loading,
})