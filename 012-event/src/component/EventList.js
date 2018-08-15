import React, {Component} from 'react'
import {Segment, Item, Icon, Button, Container} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'
import {Link, Route} from 'react-router-dom'


class EventList extends Component {
    
    render() {
        let {id, title, date, description, attendees=[], city, hostedBy, venue, hostPhotoURL, category} = this.props
        let {match} = this.props
        return (
            <div style={{marginBottom: '3rem'}}>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                            <Item.Image size='tiny' circular src={hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as='a'>{title}</Item.Header>
                                <Item.Description>
                                    Hosted By <Link to={`/people/${id}`}>{hostedBy}</Link>
                                </Item.Description>
                            </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <span>
                            <Icon name='clock'/>
                            {date} |
                            <Icon name='marker'/>
                            {venue}
                        </span>
                    </Segment>
                    <Segment >
                        {
                            attendees.map((attendee, i) => (
                                <EventAttendee key={i} attendee={attendee}/>
                            ))
                        }
                    </Segment>
                    <Segment clearing>
                        <span>{description}</span>
                        <Button as={Link} to={`event/${id}`} color='teal' floated='right' content='View'/>

                    </Segment>
                    
                </Segment.Group>
            </div>
        )
    }
}


export default EventList