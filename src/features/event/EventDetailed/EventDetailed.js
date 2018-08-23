import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import {connect} from 'react-redux'
import {firestoreConnect, withFirestore} from 'react-redux-firebase'
import Loading from '../../../app/layout/Loading'
import {compose} from 'redux'
import {handleJoinEvent, handleCancelJoinEvent} from '../../../app/redux/actions/events'



class EventDetailedPage extends Component {
    
    async componentDidMount() {
        const {match, firestore} = this.props
        let id = match.params.id
        if (id) {
            await firestore.setListener(`events/${match.params.id}`)
        }
    }
    
    async componentWillUnmount() {
        const {firestore, match} = this.props
        await firestore.unsetListener(`events/${match.params.id}`)
    }
    
    render() {
        const {event, auth, handleJoinEvent, handleCancelJoinEvent} = this.props
        
        if (Object.keys(event).length === 0) {
            return <Loading />
        }
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h1>EventDetailed</h1>
                    <EventDetailedHeader handleCancelJoinEvent={handleCancelJoinEvent} handleJoinEvent={handleJoinEvent} auth={auth} event={event} />
                    <EventDetailedInfo event={event} />
                    
                    <EventDetailedChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h1>side bar</h1>
                    <EventDetailedSidebar auth={auth} hostedBy={event.hostUid} attendees={event.attendees} />
                </Grid.Column>
            </Grid>
        )
    }
}


const mapStateToProps = (state, props) => {
    let event = {}
    const {match} = props
    let id = match.params.id
    let firestoreEvent = state.firestore.data.events
    if (firestoreEvent && Object.keys(firestoreEvent).length > 0 ) {
        event = firestoreEvent[id]
        event.id = id
    }
    let auth = state.firebase.auth.uid || ''
    console.log('event', event)
    
    return {
        event,
        auth,
    }
}

const actions = {
    handleJoinEvent,
    handleCancelJoinEvent,
}

export default withFirestore(
    connect(mapStateToProps, actions)
    (EventDetailedPage),
)

// export default withFirestore(connect(mapStateToProps)(EventDetailedPage))