import {combineReducers} from 'redux'
import todo from './todo'
import {loadingReducer} from '../component/LoadingLibrary'

export default combineReducers({
    todo,
    loading: loadingReducer,
})