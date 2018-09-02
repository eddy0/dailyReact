import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Loading from '../Layout/Loading'
import EventItem from './EventItem'




class EventList extends Component {
    render() {
        const {events} = this.props
        if (events === null) {
            return <Loading />
        }
        
        return (
            <div >
                {
                    events.map((event) => <EventItem key={event.id} event={event} />)
                }
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    let events = null
    let dbEvents = state.firestore.ordered.events
    if (dbEvents !== undefined) {
        events = dbEvents
    }
    return {
        events: events,
    }
}

export default compose(
    firestoreConnect([{collection: 'events'}]),
    connect(mapStateToProps),
)(EventList)