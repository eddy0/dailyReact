import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import {connect} from 'react-redux'
import {firebaseConnect, withFirestore, isEmpty} from 'react-redux-firebase'
import Loading from '../../../app/layout/Loading'
import {compose} from 'redux'
import {handleJoinEvent, handleCancelJoinEvent, addEventComment} from '../../../app/redux/actions/events'



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
        const {event, auth, handleJoinEvent, handleCancelJoinEvent, addEventComment, eventChat} = this.props
        
        if (Object.keys(event).length === 0) {
            return <Loading />
        }
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h1>EventDetailed</h1>
                    <EventDetailedHeader handleCancelJoinEvent={handleCancelJoinEvent} handleJoinEvent={handleJoinEvent} auth={auth} event={event} />
                    <EventDetailedInfo event={event} />
                    
                    <EventDetailedChat eventChat={eventChat} addEventComment={addEventComment} eventId={event.id} />
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
    let chat = []
    let firebaseChat = state.firebase.data.chat
    if (!isEmpty(firebaseChat)) {
        let chats = firebaseChat[id]
\        chat = !isEmpty(firebaseChat[id]) && Object.entries(chats).map(([id, value]) => {
            return {...value, id:id }
        })
    }
 
    
    return {
        event,
        auth,
        eventChat: chat
    }
}

const actions = {
    handleJoinEvent,
    handleCancelJoinEvent,
    addEventComment,
   
}

export default compose(
    withFirestore,
    connect(mapStateToProps, actions),
    firebaseConnect((props) => ([`chat/${props.match.params.id}`]))
)(EventDetailedPage)

// export default withFirestore(connect(mapStateToProps)(EventDetailedPage))


