import React, {Component} from 'react'
import {Grid, Container, Sticky} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {firestoreConnect, withFirestore, isEmpty} from 'react-redux-firebase'
import {compose} from 'redux'
import EventDetailHeader from '../EventDetail/EventDetailHeader'
import EventDetailDetails from '../EventDetail/EventDetailDetails'
import EventDetailInfo from '../EventDetail/EventDetailInfo'
import EventDetailChat from '../EventDetail/EventDetailChat'
import EventDetailAttendee from '../EventDetail/EventDetailAttendee'
import Loading from './Loading'


class EventDetail extends Component {
    state = {}

    handleContextRef = contextRef => this.setState({contextRef})

    render() {
        const {contextRef} = this.state
        const {event} = this.props
        if (event === null) {
            return <Loading active={true}/>
        }
    
        return (
            <Container style={{marginTop: '6rem'}}>
                <div ref={this.handleContextRef}>
                    <Grid>
                        <Grid.Column width={11}>
                            <EventDetailHeader  event={event} />
                            <EventDetailInfo event={event} />
                            <EventDetailDetails event={event} />
                            <EventDetailChat />

                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Sticky context={contextRef} offset={80} pushing>
                                <EventDetailAttendee attendees={event.attendees} />
                            </Sticky>
                        </Grid.Column>

                    </Grid>
                </div>
            </Container>
        )
    }
}

const connectToFireStore = (props) => {
    const id = props.match.params.id
    if (id) {
        return [{collection: 'events', doc: id}]
    }
}

const mapStateToProps = (state, props) => {
    let event = null
    const storeEvents = state.firestore.ordered.events
    if (storeEvents && storeEvents[0]) {
        event = storeEvents[0]
    }
    return {
        event: event
    }
}

export default compose(
    firestoreConnect((props) => connectToFireStore(props)),
    connect(mapStateToProps)
)(EventDetail)