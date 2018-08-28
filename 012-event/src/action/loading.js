const LOADING_START = 'LOADING_START'
const LOADING_FINISH = 'LOADING_FINISH'
const LOADING_ERROR = 'LOADING_ERROR'


const actionLoadingStart = () => {
    return {
        type: LOADING_START
    }
}

const actionLoadingFinish = () => {
    return {
        type: LOADING_FINISH
    }
}

const actionLoadingError = () => {
    return {
        type: LOADING_ERROR
    }
}

export  {
    LOADING_ERROR,
    LOADING_START,
    LOADING_FINISH,
    actionLoadingStart,
    actionLoadingFinish,
    actionLoadingError
}