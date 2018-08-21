import {actionLoadingFinish, actionLoadingStart} from './loading'


const updateProfile = (user) => async (dispatch, getState, {getFirebase}) => {
    let firebase = getFirebase()
    if (user.dateOfBirth) {
        user.dateOfBirth = new Date(user.dateOfBirth)
    }
    const {isLoaded, isEmpty, ...userInfo} = user
    
    try {
        await firebase.updateProfile(userInfo)
    } catch(e) {
        console.log('e', e)
    }
}

const uploadPhoto = (file, fileName) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase()
    let firestore = getFirestore()
    const user = await firebase.auth().currentUser
    const path = `${user.uid}/userImages`
    const options = {
        name: fileName
    }
    try {
        dispatch(actionLoadingStart())
        let uploadedFile = await firebase.uploadFile(path, file, null, options)
        let downloadURL = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL()
       
        let userDoc = await firestore.get(`users/${user.uid}`)
    
        if (!userDoc.data().photoURL) {
            await firebase.updateProfile({
                photoURL: downloadURL
            })
            
            await user.updateProfile({
                photoURL: downloadURL
            })
        }
    
        dispatch(actionLoadingFinish())
        
        return await firestore.add({
            collection: 'users',
            doc: user.uid,
            subcollections: [{collection: 'photos'}]
        }, {
            name: fileName,
            url: downloadURL,
        })
        
    
    } catch(error) {
        console.log('error', error)
    }
}


const updateProfilePhoto = (url) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase()

    try {
        dispatch(actionLoadingStart())
        await firebase.updateProfile({
            photoURL: url,
        })
        dispatch(actionLoadingFinish())
    } catch(e) {
        console.log('e', e)
    }
}

const deletePhoto = (photo) => async (dispatch, getState, {getFirebase, getFirestore}) => {
    let firebase = getFirebase()
    let firestore = getFirestore()
    
    try {
        const user = await firebase.auth().currentUser
        
        await firebase.deleteFile(`${user.uid}/userImages/${photo.name}`)
        console.log('user', user, `${user.uid}/userImages/${photo.name}`)
        await firestore.delete({
            collection: 'users',
            doc: user.uid,
            subcollections:[{collection:'photos', doc: photo.id}]
        })
        
    } catch(e) {
        console.log('e', e)
    }
}

export  {
    updateProfile,
    uploadPhoto,
    updateProfilePhoto,
    deletePhoto,
}

