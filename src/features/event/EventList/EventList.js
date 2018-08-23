import React, {Component} from 'react'
import EventItem from './EventItem'
import InfiniteScroll from 'react-infinite-scroller'


class EventList extends Component {
    render() {
        const {events, deleteEvent, getNextEvents, loading, moreEvents} = this.props
        return (
            <div>
                <h1>Event List</h1>
                {
                    events && events.length !== 0 &&
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={getNextEvents}
                        hasMore={!loading && moreEvents}
                        initialLoad={false}
                    >
                        {
                            events &&
                            events.map((event) => (
                                <EventItem key={event.id} event={event} deleteEvent={deleteEvent} />
                            ))
                        }
                      
                    </InfiniteScroll>
                  
                }
                
            </div>
        )
    }
}


export default EventList