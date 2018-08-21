import React, {Component} from 'react'
import EventItem from './EventItem'



class EventList extends Component {
    render() {
        const {events, deleteEvent} = this.props
        return (
            <div>
                <h1>Event List</h1>
                {
                    events &&
                    events.map((event) => (
                        <EventItem key={event.id} event={event} deleteEvent={deleteEvent} />
                    ))
                }
                
            </div>
        )
    }
}


export default EventList