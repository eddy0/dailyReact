import firebase from 'firebase'
import 'firebase/firestore'



const config = {
    apiKey: 'AIzaSyBaDr_ZSpie8loC1FL13PITkyzmypatWBE',
    authDomain: 'event-a6fe0.firebaseapp.com',
    databaseURL: 'https://event-a6fe0.firebaseio.com',
    projectId: 'event-a6fe0',
    storageBucket: 'event-a6fe0.appspot.com',
    messagingSenderId: '539624869970',
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = {timestampsInSnapshots: true}
firestore.settings(settings)

export default firebase