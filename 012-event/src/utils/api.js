const log = console.log.bind(console)

let events = {
    '1': {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        location: 'Tower of London, St Katharine\'s & Wapping, London',
        hostedBy: 'a',
        attendees: ['a', 'b'],
    },
    '2': {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        location: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'b',
        attendees: ['b', 'a'],
    }
}

const users = {
    'a': {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        events: []
    },
    'b': {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        events: []
    },

}

const data = [
    {
        id: '1',
        title: 'Trip to Tower of London',
        date: '2018-03-27',
        category: 'culture',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        location: 'Tower of London, St Katharine\'s & Wapping, London',
        hostedBy: 'Bob',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
        ],
    },
    {
        id: '2',
        title: 'Trip to Punch and Judy Pub',
        date: '2018-03-28',
        category: 'drinks',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        location: 'Punch & Judy, Henrietta Street, London, UK',
        hostedBy: 'Tom',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
        attendees: [
            {
                id: 'b',
                name: 'Tom',
                photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
            {
                id: 'a',
                name: 'Bob',
                photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
        ],
    },
]

const _getUsers = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(users)
        }, 1000)
    })
}

const _getEvents = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(events)
        }, 1000)
    })
}


const flattenEvent = (event, users) => {
    let attendees = event.attendees
    let hostedBy = users[event.hostedBy].name
    attendees = attendees.map((id) => {
        let user = users[id]
        return {
            ...user
        }
    })
    return {
        ...event,
        hostedBy,
        attendees: attendees
    }
}

const formateEvents = (events, users) => {
    let eventsIds = Object.keys(events)
    let e = eventsIds.reduce((object, id) => {
        object[id] = flattenEvent(events[id], users)
        return object
    },{})
    return e
}

const fetchData = () => {
    return Promise.all([ _getEvents(), _getUsers()])
        .then(([events, users]) => {
            return {
                events: formateEvents(events, users),
                users,
            }
        })
}

const getEvent = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let event = data.find((e) => e.id === id)
            if (event) {
                res(event)
            } else {
                rej()
            }
        }, 1000)
    })
}

export {
    fetchData,
    getEvent,
}