import React, {Component} from 'react'
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'
import {Link, withRouter} from 'react-router-dom'
import format from 'date-fns/format'


class EventItem extends Component {
    render() {
        let {id, title, hostedBy, date, hostPhotoURL, description, venue, attendees} = this.props.event
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={hostPhotoURL} />
                            <Item.Content>
                                <Item.Header as="a">{title}</Item.Header>
                                <Item.Description>
                                    Hosted by <a>{hostedBy}</a>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
              <span>
                <Icon name="clock" />  {format(date, 'dddd Do MMMM')} at {format(date, 'HH:mm' )} |
                <Icon name="marker" /> {venue}
              </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {
                            attendees &&
                            attendees.map((attendee) => (
                                <EventAttendee key={attendee.id} attendee={attendee} />
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