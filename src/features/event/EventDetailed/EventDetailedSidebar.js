import React, {Component} from 'react'
import {List, Item, Label, Segment, Button, Header} from 'semantic-ui-react'



class EventDetailedSidebar extends Component {
    render() {
        const {attendees} = this.props
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
                            this.props.attendees.map((attendee) => {
                                return (
                                    <Item style={{position: 'relative'}} key={attendee.id}>
                                        {
                                            attendee.name === this.props.hostedBy
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
                                                <a>{attendee.name}</a>
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