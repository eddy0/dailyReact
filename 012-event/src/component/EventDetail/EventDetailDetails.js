import React, {Component} from 'react'
import {Segment, Message, Header} from 'semantic-ui-react'
import {Comment} from 'semantic-ui-react/dist/commonjs/views/Comment/Comment'



class EventDetailDetails extends Component {
    render() {
        return (
            <Segment style={{padding: 0}}>
                <Message>
                    <Header as='h3' style={{marginBottom: '2rem'}} dividing>
                        Details
                    </Header>
                   
                    <p>
                        We updated our privacy policy here to better service our customers. We recommend reviewing the
                        changes.
                    </p>
                    <p>
                        We updated our privacy policy here to better service our customers. We recommend reviewing the
                        changes.
                    </p>
                    <p>
                        We updated our privacy policy here to better service our customers. We recommend reviewing the
                        changes.
                    </p>
                    <p>
                        We updated our privacy policy here to better service our customers. We recommend reviewing the
                        changes.
                    </p>
                </Message>
                
            </Segment>
        )
    }
}


export default EventDetailDetails