import {combineReducers} from 'redux'
import events from './events'
import modal from './modal'
import {reducer as formReducer} from 'redux-form'
import auth from './auth'
import loading from './loading'
import {reducer as toastr} from 'react-redux-toastr'



export default combineReducers({
    events,
    form: formReducer,
    modal,
    auth,
    loading,
    toastr,
})