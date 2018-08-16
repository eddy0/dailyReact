const RECEIVE_USERS = 'RECEIVE_USER'

const actionReceiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export {
    RECEIVE_USERS,
    actionReceiveUsers,
}