import React, {Component} from 'react'
import {List, Image, Item} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



class EventAttendee extends Component {
    render() {
        const {attendee, id} = this.props
        return (
            <List.Item>
                <Image as={Link} to={`/people/${id}`} size='mini' circular src={attendee.photoURL} />
            </List.Item>
        )
    }
}




export default EventAttendee