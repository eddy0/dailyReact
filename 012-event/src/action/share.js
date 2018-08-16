import {actionInitEvent, actionReceiveEvents} from './event'
import {hideLoading, showLoading} from 'react-redux-loading-bar'
import {fetchData} from '../utils/api'
import {actionReceiveUsers} from './user'




const handleInitialEvents = () => {
    return (dispatch) => {
        dispatch(showLoading())
        fetchData().then(({events, users}) => {
            dispatch(actionReceiveEvents(events))
            dispatch(actionReceiveUsers(users))
            dispatch(hideLoading())
        })
    }
}

export {
    handleInitialEvents,
}