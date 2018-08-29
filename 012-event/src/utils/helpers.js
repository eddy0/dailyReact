
const createNewEvent = ({user, photoURL, displayName, event}) => {
    event.date = new Date(event.date)
    displayName =  displayName || user.displayName
    return {
        ...event,
        hostUid: user.uid,
        hostBy: displayName,
        photoURL: photoURL || '/assets/user.png',
        created: Date.now(),
        attendees: {
            [user.uid]: {
                going: true,
                joinDate: Date.now(),
                photoURL: photoURL || '/assets/user.png',
                displayName: displayName,
                host: true,
            }
        }
    }
}

export {
    createNewEvent,
}