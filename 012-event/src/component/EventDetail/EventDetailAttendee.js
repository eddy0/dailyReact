import React, {Component} from 'react'
import {Header, Card, Image, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class EventDetailAttendee extends Component {
    render() {
        const {attendees} = this.props
        const peopleCount = Object.keys(attendees).length
        return (
            <div>
                <Header as='h3'>EventDetailAttendee ({peopleCount})</Header>
                
                <Card.Group style={{flexWrap: 'wrap'}} >
                    {
                        Object.keys(attendees).map((uid) => {
                            const attendee = attendees[uid]
                            return (
                                <Card as={Link} to={`/people/${uid}`}  style={{width: 'auto'}} key={uid}  >
                                    <Image size='small' src={`${attendee.photoURL}`} />
                                    <Card.Header textAlign='center' style={{overflow: 'hidden', padding: ' 0.3rem 0.5rem 0 0.5rem'}}>{attendee.displayName}</Card.Header>
                                    <Card.Meta style={{fontSize: '12px'}} textAlign='center'>{ new Date(attendee.joinDate).toLocaleString('en-US',  {year: 'numeric', month: 'short', day: '2-digit' }) }</Card.Meta>
                                </Card>
                            )
                        })

                    }

                    
                </Card.Group>
            </div>
        )
    }
}


export default EventDetailAttendee