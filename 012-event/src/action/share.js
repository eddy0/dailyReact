import {actionInitEvent} from './event'
import {hideLoading, showLoading} from 'react-redux-loading-bar'
import {fetchData} from '../utils/api'


const handleInitialEvents = () => {
    return (dispatch) => {
        dispatch(showLoading())
        fetchData().then((data) => {
            dispatch(actionInitEvent(data))
            dispatch(hideLoading())
        })
    }
}

export {
    handleInitialEvents,
}