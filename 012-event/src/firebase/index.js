import firebase from 'firebase/app'
import {config} from './config'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'



firebase.initializeApp(config)

const firestore = firebase.firestore()

let setting = {
    timestampsInSnapshots: true,
}

firestore.settings(setting)

export default firebase
export {firestore}