import React, {Component} from 'react'
import {Segment,Item, Icon,Button} from 'semantic-ui-react'
import EventAttendee from './EventAttendee'


class EventList extends Component {
    render() {
        return (
            <div>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                            <Item.Image size='tiny' circular src='https://randomuser.me/api/portraits/men/47.jpg' />
                            <Item.Content>
                                <Item.Header as='a'>Event Title</Item.Header>
                                <Item.Description>
                                    Hosted By <a>Hosted By</a>
                                </Item.Description>
                            </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <span>
                            <Icon name='clock'/>
                            date |
                            <Icon name='marker'/>
                            time
                        </span>
                    </Segment>
                    <Segment >
                        <EventAttendee/>
                    </Segment>
                    <Segment clearing>
                        <span>come and join us</span>
                        <Button as='a' color='teal' floated='right' content='View'></Button>
                    </Segment>
                    
                </Segment.Group>
            </div>
        )
    }
}


export default EventList