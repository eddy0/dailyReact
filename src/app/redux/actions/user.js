const updateProfile = (user) => async (dispatch, getState, {getFirebase}) => {
    let firebase = getFirebase()
    console.log('firebase', firebase)
    
    if (user.dateOfBirth) {
        user.dateOfBirth = new Date(user.dateOfBirth)
    }
    const {isLoaded, isEmpty, ...userInfo} = user
   
    
    try {
        // let u = await firebase.auth().currentUser
        // await u.updateProfile(userInfo)
        // console.log('user', user)
    
        // await firebase.set(`users/${user.uid}`, {...userInfo})
        await firebase.updateProfile(userInfo)
    } catch(e) {
        console.log('e', e)
        
    }
}

export default updateProfile