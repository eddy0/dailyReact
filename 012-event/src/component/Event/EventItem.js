import React, {Component} from 'react'
import {Segment, Item, Image, Icon, List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const EventItem = (props) => {
    const {event} = props
    return (
        <Segment.Group style={{boxShadow: '0 5px 15px rgba(0,0,0,0.3)'}}>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image circular size='tiny' as={Link} to={`people/${event.hostUid}`} src={event.photoURL} />
                        
                        <Item.Content>
                            <Item.Description>
                                host by <Link to={`people/${event.hostUid}`}>{event.hostBy} </Link>
                            </Item.Description>
                            <Item.Header as={Link} to={`/event/${event.id}`}>{event.title}</Item.Header>
                            <Item.Meta>{event.description}</Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
            
            </Segment>
            <Segment style={{boxShadow: '0 5px 10px rgba(0,0,0,0.6)'}}>
                <List>
                    <List.Item>
                        <Icon name="clock" />
                        <List.Content>time</List.Content>
                    </List.Item>
                    <List.Item>
                        <Icon name="marker" />
                        <List.Content>company name</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='user' />
                        <List.Content style={{color: 'lightcoral'}}>
                            4 people is going | only 4 spot left!!
                        </List.Content>
                       
                    </List.Item>
                </List>
                <Item>
                
                </Item>
                <Item>
                
                </Item>
                <Item>
                
                </Item>
            </Segment>
            
            <Segment secondary>
                <List horizontal>
                    {
                        event.attendees &&
                        Object.keys(event.attendees).map((id) => {
                            const attendee = event.attendees[id]
                            return (
                                <List.Item>
                                    <Image circular size='mini' key={id} src={attendee.photoURL} />
                                </List.Item>
                            )
                        })
                    }
                </List>
            </Segment>
        
        </Segment.Group>
    )
}

export default EventItem