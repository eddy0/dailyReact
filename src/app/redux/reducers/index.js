import {combineReducers} from 'redux'
import events from './events'
import {reducer as formReducer} from 'redux-form'



export default combineReducers({
    events,
    form: formReducer,
})