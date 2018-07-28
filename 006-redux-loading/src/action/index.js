import {showLoading, hideLoading} from '../LoadingBar'

const API = () => {
    let data = [
        {
        todo: '1'
        },
        {
            todo: '2'
        }
    ]

    const fetchData = () => {
        return new Promise( (res, rej) => {
            setTimeout(() => {
                res(data)
            }, 500)
        })
    }

    return {
        fetchData,
    }
}

const handleInitaldata = (data) => {
    return {
        type: 'FETCH_DATA',
        data,
    }
}

const handleInitalAction = () => {
    return (dispatch) => {
        dispatch(showLoading())
        API().fetchData()
        .then((data) => {
            console.log(data)
            dispatch(handleInitaldata(data))
            dispatch(hideLoading())
        })
    }
}


export default handleInitalAction
