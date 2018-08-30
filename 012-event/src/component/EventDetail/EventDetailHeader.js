import React, {Component} from 'react'
import {Header, Segment, Item, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const headerText = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: 'auto',
    height: 'auto',
    color: 'white',
    padding: 0,
}


class EventDetailHeader extends Component {
    render() {
        const {event}  = this.props
        return (
            <Segment.Group >
                <Segment basic attached="top" style={{padding: '0'}}>
                    <Image style={{
                        borderRadius: '5px 5px 0 0',
                        filter: 'brightness(60%)',
                    }}
                        src={`/assets/categoryImages/${event.category}.jpg`}
                        fluid
                    />
                    
                    <Segment basic style={headerText}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header
                                        size="huge"
                                        content={event.title}
                                        style={{color: 'white'}}
                                    />
                                    <p>
                                        <span> { new Date(event.date.toDate()).toLocaleString('en-US',  { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' })  }</span>
                                        <span> from { new Date(event.timeStart).toLocaleString('en-US',  { hour12: true, hour: 'numeric', minute: 'numeric' } )  }</span>
                                        <span> to { new Date(event.timeEnd).toLocaleString('en-US',  { hour12: true, hour: 'numeric', minute: 'numeric' } )  }</span>
                                    </p>
                                    <p>
                                        Hosted by <strong>{event.hostBy}</strong>
                                    </p>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    
                    </Segment>
                </Segment>
                    <Segment attached="bottom">
                        <Button compact  color="teal">Join the event</Button>
                    </Segment>
            </Segment.Group>
        )
    }
}


export default EventDetailHeader