import {showLoading, hideLoading} from '../LoadingBar'

const API = () => {
    let data = {
        1:{
            id: '1',
            todo: 'todo1'
        },
        2:{
            id: '2',
            todo: 'todo2'
        },
        3:{
            id: '3',
            todo: 'todo3'
        },
    }

    const fetchData = () => {
        return new Promise( (res, rej) => {
            setTimeout(() => {
                res(data)
            }, 1000)
        })
    }

    return {
        fetchData,
    }
}

const handleInitaldata = (todo) => {
    return {
        type: 'FETCH_DATA',
        todo,
    }
}

const handleInitalAction = () => {
    return (dispatch) => {
        dispatch(showLoading())
        API().fetchData()
        .then((todo) => {
            dispatch(handleInitaldata(todo))
            dispatch(hideLoading())
        })
    }
}


export default handleInitalAction
