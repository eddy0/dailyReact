import {combineReducers} from 'redux'
import {loadingReducer} from '../LoadingBar'

const data = (state=[], action) => {
    switch (action.type) {
        case 'FETCH_DATA':
            return state.concat(action.data)
        default:
            return state
    }
}


export default combineReducers({
    data,
    loading: loadingReducer,
})
