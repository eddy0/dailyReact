import {setAuthUser} from './auth'
import {actionLoadingFinish, actionLoadingStart} from './loading'



const RECEIVE_USERS = 'RECEIVE_USER'
const LOGIN_USER = 'LOGIN_USER'
const SIGN_OUT_USER = 'SIGN_OUT_USER'

const actionUpdateAvatar = (image, fileName) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase()
    let firestore = getFirestore()
    const user = await firebase.auth().currentUser
    const path = `${user.uid}/userAvatars`
    const options = {
        name: fileName,
    }
    try {
        dispatch(actionLoadingStart())
        let uploadedFile = await firebase.uploadFile(path, image, null, options)
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
        
        await firebase.updateProfile({
            photoURL: downloadURL,
        })
        await firestore.get(`users/${user.uid}`)
        dispatch(actionLoadingFinish())
        
        return downloadURL
        
    } catch(error) {
        console.log('error', error)
    }
}

export {
    actionUpdateAvatar,
    
}