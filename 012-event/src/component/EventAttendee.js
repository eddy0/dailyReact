import React, {Component} from 'react'
import {List, Image} from 'semantic-ui-react'


class EventAttendee extends Component {
    render() {
        return (
                <Image style={{marginRight: '0.5rem'}} as='a' size='mini' circular src={this.props.attendee.photoURL} alt="" />
        )
    }
}


export default EventAttendee