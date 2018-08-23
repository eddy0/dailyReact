const functions = require('firebase-functions')

const admin = require('firebase-admin')

admin.initializeApp(functions.config().firebase)
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.createActivity = functions.firestore
//     .document('events/${eventId}')
//     .onCreate(event => {
//         let newEvent = event.data()
//         console.log('newEvent', newEvent)
//         // const activity = {
//         //     type: 'newEvent',
//         //     eventDate:newEvent.date,
//         //     hostBy: newEvent.hostBy,
//         //     title: newEvent.title,
//         //     photoURL: newEvent.photoURL,
//         //     timestamp: admion.firestore.FieldValue.serverTimeStamp(),
//         //     hostUid: newEvent.hostUid,
//         //     eventId: event.id
//         // }
//         //
//         // console.log('activity', activity)
//         // return admin.firestore().collection('activity').add(activity).then((docRef) => {
//         //     return console.log('docRef.id', docRef.id)
//         // })
//    
//     })

const newActivity = (type, newEvent, id) => {
    return {
        type: type,
        eventDate: newEvent.date,
        hostBy: newEvent.hostBy,
        title: newEvent.title,
        photoURL: newEvent.photoURL,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        hostUid: newEvent.hostUid,
        eventId: id,
    }
}
exports.createActivity = functions.firestore
    .document('events/{eventsId}')
    .onCreate((event, context) => {
        
        const newEvent = event.data()
        console.log('newValue', newEvent)
        const activity = newActivity('newEvent', newEvent, event.id )
        
        
        console.log('activity', activity)
        return admin.firestore().collection('activity').add(activity).then((docRef) => {
            return console.log('docRef.id', docRef.id)
        })
    })

exports.createActivity = functions.firestore
    .document('events/{eventId}')
    .onUpdate((event, context) => {
        let updatedEvent = event.after.data()
        let previousEventData = event.before.data()
        console.log('event', event)
        console.log('context', context)
        console.log('updatedEvent', updatedEvent)
        console.log('previousEventData', previousEventData)
        
        if (!updatedEvent.cancelled || updatedEvent.cancelled === previousEventData.cancelled) {
            return false
        }
        
        const activity = newActivity('cancelled',updatedEvent, context.params.eventId )
        console.log('activity', activity)
        return admin.firestore().collection('activity').add(activity).then((docRef) => {
            return console.log('docRef.id', docRef.id)
        })
    })


