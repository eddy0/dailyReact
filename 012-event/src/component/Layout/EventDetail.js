import React, {Component} from 'react'
import {Grid, Container, Sticky} from 'semantic-ui-react'
import EventDetailHeader from '../EventDetail/EventDetailHeader'
import EventDetailDetails from '../EventDetail/EventDetailDetails'
import EventDetailInfo from '../EventDetail/EventDetailInfo'
import EventDetailChat from '../EventDetail/EventDetailChat'
import EventDetailAttendee from '../EventDetail/EventDetailAttendee'



class EventDetail extends Component {
    state = {}
    
    handleContextRef = contextRef => this.setState({ contextRef })
    
    render() {
        const { contextRef } = this.state
    
        
        return (
            <Container style={{marginTop: '6rem'}}>
                <div ref={this.handleContextRef}>
                <Grid >
                    
                    <Grid.Column width={11}>
                        <EventDetailHeader />
                        <EventDetailInfo />
                        <EventDetailDetails />
                        <EventDetailChat/>
                    
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Sticky  context={contextRef} offset={80} pushing >
                        <EventDetailAttendee/>
                        </Sticky>
                    </Grid.Column>
                 
                </Grid>
                </div>
            </Container>
        )
    }
}


export default EventDetail