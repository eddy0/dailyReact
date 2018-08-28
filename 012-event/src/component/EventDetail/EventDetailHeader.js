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
        return (
            <Segment.Group >
                <Segment basic attached="top" style={{padding: '0'}}>
                    <Image style={{
                        borderRadius: '5px 5px 0 0',
                        filter: 'brightness(60%)',
                    }}
                        src={`/assets/categoryImages/drinks.jpg`}
                        fluid
                    />
                    
                    <Segment basic style={headerText}>
                        <Item.Group>
                            <Item>
                                <Item.Content>
                                    <Item.Header
                                        size="huge"
                                        content='{title}'
                                        style={{color: 'white'}}
                                    />
                                    <p>format(Date(date), 'dddd Do MMMM')</p>
                                    <p>
                                        Hosted by <strong>hostBy || hostUid</strong>
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