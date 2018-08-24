import React, {Component} from 'react'
import {Feed, Segment, Header, Sticky} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import EventActivityItem from './EventActivityItem'



class EventActivity extends Component {
    render() {
        const {activites, contextRef} = this.props
        return (
            <div>
                <h1>Event Activites</h1>
                <Sticky pushing context={contextRef}>
                    <Segment>
                        
                        <Feed>
                            {
                                activites &&
                                activites.map((activity) => (
                                    <EventActivityItem key={activity.id} activity={activity} />
                                ))
                            }
                        
                        </Feed>
                    
                    </Segment>
                </Sticky>
            </div>
        )
    }
    
}


export default EventActivity