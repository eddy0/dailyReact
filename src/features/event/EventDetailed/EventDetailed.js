import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import {connect} from 'react-redux'
import {withFirestore, isEmpty, isLoaded, firestoreConnect} from 'react-redux-firebase'
import Loading from '../../../app/layout/Loading'
import {compose} from 'redux'



class EventDetailedPage extends Component {
    
    render() {
        const {event} = this.props
        if (!event) {
            return <Loading />
        }
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h1>EventDetailed</h1>
                    <EventDetailedHeader event={event} />
                    <EventDetailedInfo event={event} />
                   
                    <EventDetailedChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h1>side bar</h1>
                    <EventDetailedSidebar hostedBy={event.hostUid}  attendees={event.attendees} />
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps =  (state, props) => {
    let event = {}
    
    let firestoreEvent = state.firestore.ordered.event
    if (firestoreEvent && firestoreEvent[0]) {
        event = firestoreEvent[0]
    }
    
    return {
        event,
    }
}

export default compose(
    firestoreConnect((props) => [{collection: 'events', doc: props.match.params.id, storeAs: 'event'}]),
    connect(mapStateToProps)
)(EventDetailedPage)

// export default withFirestore(connect(mapStateToProps)(EventDetailedPage))