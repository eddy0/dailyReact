import React, {Component} from 'react'
import {Segment, Header} from 'semantic-ui-react'



class EventActivity extends Component {
    
    render() {
        return (
            <div>
                <h1>Event List</h1>
                <Segment.Group>
                    <Segment >
                    <Header content='Recent Activity'  />
                    
                    
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
}


export default EventActivity