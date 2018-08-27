const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

const actionOpenModal = (modalType, modalProps ) => {
    return {
        type: OPEN_MODAL,
        modalType: modalType,
        modalProps: modalProps,
    }
}

const actionCloseModal = ( ) => {
    return {
        type: OPEN_MODAL,
    }
}


export {
    OPEN_MODAL,
    CLOSE_MODAL,
    actionOpenModal,
    actionCloseModal,
}