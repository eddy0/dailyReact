const SET_AUTH_USER = 'SET_AUTH_USER'


const setAuthUser = (id) => {
    return {
        type: SET_AUTH_USER,
        id
    }
}

export {
    SET_AUTH_USER,
    setAuthUser,
}