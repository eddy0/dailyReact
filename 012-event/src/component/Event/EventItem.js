import React, {Component} from 'react'
import {Segment, Item, Image, Icon, List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import { Tooltip } from 'antd';


const EventItem = (props) => {
    const {event} = props
    const peopleCount = Object.keys(event.attendees).length
    event.capacityAvaliable = Number(event.capacity) -  peopleCount
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
            <Segment >
                <List>
                    <List.Item>
                        <Icon name="clock" />
                        <List.Content>{new Date(Date(event.date)).toLocaleString('en-US',  { weekday: 'short', year: 'numeric', month: 'long', day: '2-digit' })}</List.Content>
                    </List.Item>
                    <List.Item>
                        <Icon name="marker" />
                        <List.Content>{event.company}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='user' />
                        <List.Content >
                            <span>{ Object.keys(event.attendees).length } people is going</span>
                            {' |'}
                            <span style={{color: 'lightcoral'}}> only {event.capacityAvaliable} spot left!!</span>
                        </List.Content>
                    </List.Item>
                </List>
            </Segment>
            
            <Segment secondary>
                <List horizontal>
                    {
                        event.attendees &&
                        Object.keys(event.attendees).map((id) => {
                            const attendee = event.attendees[id]
                            return (
                                <List.Item key={id} >
                                    <Tooltip placement="top" title={attendee.displayName} >
                                    <Image as={Link} to={`people/${id}`} circular size='mini' key={id} src={attendee.photoURL} />
                                    </Tooltip>
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