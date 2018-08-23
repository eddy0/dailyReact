import React from 'react'
import {Header, Segment, Item, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import format from 'date-fns/format'



const eventImageStyle = {
    filter: 'brightness(30%)',
}

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white',
}

const EventDetailedHeader = ({event, auth, handleJoinEvent, handleCancelJoinEvent}) => {
    
    const {date, hostUid, hostBy, title, category, id, attendees} = event
    let isHost = auth === hostUid
    let joined = Object.keys(attendees).some((id) => id === auth)
    
    return (
        <Segment.Group>
            <Segment basic attached="top" style={{padding: '0'}}>
                <Image src={`/assets/categoryImages/${category}.jpg`} fluid style={eventImageStyle} />
                
                <Segment basic style={eventImageTextStyle}>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header
                                    size="huge"
                                    content={title}
                                    style={{color: 'white'}}
                                />
                                <p>{format(Date(date), 'dddd Do MMMM')}</p>
                                <p>
                                    Hosted by <strong>{hostBy || hostUid}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
            
            <Segment attached="bottom">
                
                {
                    !isHost &&
                    <div>
                        {
                            joined
                                ? <Button onClick={() => handleCancelJoinEvent(event)}>Cancel My Place</Button>
                                : <Button color="teal" onClick={() => handleJoinEvent(event)}>JOIN THIS EVENT</Button>
                        }
                    
                    </div>
                }
                
                {
                    isHost &&
                    <div style={{textAlign: 'right'}}>
                        <Button as={Link} to={`/manage/${id}`} color="orange">
                            Manage Event
                        </Button>
                    </div>
                    
                }
            
            </Segment>
        </Segment.Group>
    )
}

export default EventDetailedHeader