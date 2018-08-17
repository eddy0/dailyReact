import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventDetailedSidebar from './EventDetailedSidebar'
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import {connect} from 'react-redux'



class EventDetailedPage extends Component {
    render() {
        const {event} = this.props
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
                    <EventDetailedSidebar hostedBy={event.hostedBy}  attendees={event.attendees} />
                </Grid.Column>
            </Grid>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    let event = {}
    
    if (id && state.events.length > 0) {
        event = state.events.filter((event) => event.id === id)[0]
    }
    return {
        event,
    }
}


export default connect(mapStateToProps)(EventDetailedPage)