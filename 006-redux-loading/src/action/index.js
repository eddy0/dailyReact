import {showLoading, hideLoading} from '../LoadingBar'

const API = () => {
    let data =[
        {
        todo: '1'
        },
        {
            todo: '2'
        }
]

    const fetchData = () => {
        return Promise.resolve().
                then(() => {
                    setTimeout(() => {
                        return data
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
        showLoading()
        API().fetchData()
        .then((data) => {
            dispatch(handleInitaldata(data))
            hideLoading()
        })
    }
}


export default handleInitalAction
