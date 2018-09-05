import React, {Component} from 'react'
import {Grid, Container, Sticky} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {firestoreConnect, withFirestore, firebaseConnect, isEmpty} from 'react-redux-firebase'
import {compose} from 'redux'
import EventDetailHeader from '../EventDetail/EventDetailHeader'
import EventDetailDetails from '../EventDetail/EventDetailDetails'
import EventDetailInfo from '../EventDetail/EventDetailInfo'
import EventDetailChat from '../EventDetail/EventDetailChat'
import EventDetailAttendee from '../EventDetail/EventDetailAttendee'
import Loading from './Loading'
import {formatChats} from '../../utils/helpers'
import {actionCancelJoin, actionJoinEvent} from '../../action/event'
import {actionAddComment} from '../../action/comment'



class EventDetail extends Component {
    
    state = {}

    handleContextRef = contextRef => this.setState({contextRef})
    
    componentWillMount() {
        let url=`https://maps.googleapis.com/maps/api/js?key=AIzaSyAYVHNqmifVNgbn_Rzm1SLViGST1YOlfFg&libraries=places&language=en`
        this.tag = document.createElement('script');
        this.tag.src = url
        this.tag.onload = this.initAutocomplete
        document.body.appendChild(this.tag)
    }
    
    async componentDidMount() {
        const {match, firestore} = this.props
        let id = match.params.id
        if (id) {
            await firestore.setListener(`events/${match.params.id}`)
        }
    }
    
    async componentWillUnmount() {
        this.tag.remove()
        const {firestore, match} = this.props
        await firestore.unsetListener(`events/${match.params.id}`)
    }

    render() {
        const {contextRef} = this.state
        const {event, chats, uid, actionAddComment} = this.props
        
        if (event === null) {
            return <Loading active={true}/>
        }
    
        return (
            <Container style={{marginTop: '6rem'}}>
                <div ref={this.handleContextRef}>
                    <Grid>
                        <Grid.Column width={11}>
                            <EventDetailHeader actionCancelJoin={this.props.actionCancelJoin} actionJoinEvent={this.props.actionJoinEvent}  event={event} uid={uid} />
                            <EventDetailInfo event={event} />
                            <EventDetailDetails event={event} />
                            <EventDetailChat chats={chats}  actionAddComment={actionAddComment} eventId={event.id} />

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
        return [
            {collection: 'events', doc: id}]
    }
}

const mapStateToProps = (state, props) => {
    let event = null
    const storeEvents = state.firestore.ordered.events
    if (storeEvents && storeEvents[0]) {
        event = storeEvents[0]
    }
    let chats = {}
    let firebaseChat = state.firebase.data.chat
    if (!isEmpty(firebaseChat)) {
        const id = props.match.params.id
        if (!isEmpty(firebaseChat[id])) {
            chats = formatChats(firebaseChat[id])
        }
    }
    let uid = state.firebase.auth.uid
    
    return {
        event: event,
        chats: chats,
        uid,
    }
}



const actions = {
    actionJoinEvent,
    actionCancelJoin,
    actionAddComment,
}

export default compose(
    withFirestore,
    firestoreConnect((props) => connectToFireStore(props)),
    firebaseConnect((props) => ([`chat/${props.match.params.id}`])),
    connect(mapStateToProps, actions)
)(EventDetail)