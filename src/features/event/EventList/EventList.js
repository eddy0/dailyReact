import React, {Component} from 'react'
import EventItem from './EventItem'



class EventList extends Component {
    render() {
        const {events} = this.props
        return (
            <div>
                <h1>Event List</h1>
                {
                    events.map((event) => {
                        return (
                            <EventItem key={event.id} event={event} deleteEvent={this.props.deleteEvent} />
                        )
                    })
                }
                
            </div>
        )
    }
}


export default EventList