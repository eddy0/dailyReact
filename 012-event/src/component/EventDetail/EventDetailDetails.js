import React, {Component} from 'react'
import {Segment, Message, Header} from 'semantic-ui-react'
import {Comment} from 'semantic-ui-react/dist/commonjs/views/Comment/Comment'


class EventDetailDetails extends Component {
    render() {
        const {event} = this.props
        return (
            <Segment style={{padding: 0}}>
                <Message>
                    <Header as='h3' style={{marginBottom: '2rem'}} dividing>
                        Details
                    </Header>
                    <p>
                        {event.details}
                    </p>
                </Message>
                
            </Segment>
        )
    }
}


export default EventDetailDetails