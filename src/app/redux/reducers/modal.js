import {MODAL_CLOSE, MODAL_OPEN} from '../actions/modal'



const modal = (state = null, action) => {
    if (action.type === MODAL_OPEN) {
        const {modalType, modalProps} = action
        return {modalType, modalProps}
    } else if (action.type === MODAL_CLOSE) {
        return null
    } else {
        return state
    }
}

export default modal