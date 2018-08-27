import {CLOSE_MODAL, OPEN_MODAL} from '../action/modal'



const modal = (state = null, action) => {
    if (action.type === OPEN_MODAL) {
        return {modalType: action.modalType, modalProps: action.modalProps}
    } else if (action.type === CLOSE_MODAL) {
        return null
    } else {
        return state
    }
}

export {modal as default}
