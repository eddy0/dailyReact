import React, {Component} from 'react'
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'
import {Link, withRouter} from 'react-router-dom'
import format from 'date-fns/format'


class EventItem extends Component {
    render() {
        let {id, title,  date, photoURL, hostUid, hostedBy, description, venue, attendees} = this.props.event
        
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={photoURL} />
                            <Item.Content>
                                <Item.Header as="a">{title}</Item.Header>
                                <Item.Description>
                                    Hosted by <Link to={`/profile/${hostUid}`}>{hostedBy}</Link>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
              <span>
                <Icon name="clock" />  {format(Date(date), 'dddd Do MMMM')} at {format(Date(date), 'HH:mm' )} |
                <Icon name="marker" /> {venue}
              </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {
                            attendees &&
                            Object.keys(attendees).map((id) => (
                                <EventAttendee key={id} attendee={attendees[id]} />
                            ))
                        }
                    </List>
                </Segment>
                <Segment clearing>
                    <span>{description}</span>
                    <Button  onClick={() => this.props.deleteEvent(this.props.event.id)} as="a" color="red" floated="right" content="Delete" />
                    <Button as={Link} to={`/event/${id}`} color="teal" floated="right" content="View" />
                   
                </Segment>
            </Segment.Group>
        )
    }
}


export default withRouter(EventItem)