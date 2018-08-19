const MODAL_OPEN = 'MODEL_OPEN'
const MODAL_CLOSE = 'MODAL_CLOSE'

const openModal = (modalType, modalProps) => {
    return {
        type: MODAL_OPEN,
        modalType: modalType,
        modalProps: modalProps,
    }
}

const closeModal = () => {
    return {
        type: MODAL_CLOSE,
    }
}

export  {
    MODAL_OPEN,
    MODAL_CLOSE,
    openModal,
    closeModal,
}