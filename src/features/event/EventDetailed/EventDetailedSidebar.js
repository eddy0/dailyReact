import React, {Component} from 'react'
import {List, Item, Label, Segment} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class EventDetailedSidebar extends Component {
    
    render() {
        const {attendees, hostUid} = this.props
        
        return (
            <div>
                <Segment
                    textAlign="center"
                    style={{border: 'none'}}
                    attached="top"
                    secondary
                    inverted
                    color="teal"
                >
                    {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person': 'People'} Going
                </Segment>
                <Segment attached>
                    <List relaxed divided>
                        
                        {attendees &&
                            Object.keys(attendees).map((id) => {
                                let attendee = attendees[id]
                                return (
                                    <Item style={{position: 'relative'}} key={id}>
                                        {
                                            attendee.host
                                                ? <Label
                                                    style={{position: 'absolute'}}
                                                    color="orange"
                                                    ribbon="right"
                                                    >
                                                        Host
                                                    </Label>
                                                : null
                                            
                                        }
                                        
                                        <Item.Image size="tiny" src={attendee.photoURL} />
                                        <Item.Content verticalAlign="middle">
                                            <Item.Header as="h3">
                                                <Link to={`/people/${id}`}>{attendee.displayName}</Link>
                                            </Item.Header>
                                        </Item.Content>
                                    </Item>
                                )
                            })
                        }
                    
                    </List>
                </Segment>
            </div>
        )
    }
}



export default EventDetailedSidebar