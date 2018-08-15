import React, {Component} from 'react'
import {List, Image} from 'semantic-ui-react'



class EventAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image style={{marginRight: '0.5rem'}} as='a' size='mini' circular src="https://randomuser.me/api/portraits/men/48.jpg" alt="" />
                <Image style={{marginRight: '0.5rem'}} as='a' size='mini' circular src="https://randomuser.me/api/portraits/men/48.jpg" alt="" />
                <Image style={{marginRight: '0.5rem'}} as='a' size='mini' circular src="https://randomuser.me/api/portraits/men/48.jpg" alt="" />
            </List.Item>
        )
    }
}


export default EventAttendee