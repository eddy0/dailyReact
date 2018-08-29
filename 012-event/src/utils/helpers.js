
const createNewEvent = ({user, photoURL, displayName, event}) => {
    event.date = new Date(event.date)
    return {
        ...event,
        hostUid: user.uid,
        hostBy: displayName || user.displayName ,
        photoURL: photoURL || '/assets/user.png',
        created: Date.now(),
        attendees: {
            [user.uid]: {
                going: true,
                joinDate: Date.now(),
                photoURL: photoURL || '/assets/user.png',
                displayName: user.displayName,
                host: true,
            }
        }
    }
}

export {
    createNewEvent,
}