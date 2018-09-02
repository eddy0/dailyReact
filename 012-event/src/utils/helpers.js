
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


const formatChats = (chats) => {
    let obj = {}
    Object.entries(chats).map(([id, value]) => {
        if (chats[id].parentId === 0) {
            obj[id] = {...value, children: []}
        }
    })
    
    Object.keys(chats).map((id) => {
        if (chats[id].parentId !== 0) {
            let parentId = chats[id].parentId
            if (obj[parentId]) {
                obj[parentId].children.push({...chats[id], id: id})
            }
        }
    })
    return obj
}


export {
    createNewEvent,
    formatChats,
}