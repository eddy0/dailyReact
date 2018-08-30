import React, {Component, Fragment} from 'react'
import {Grid,  Segment, Button, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment'

// import format from "date-fns/format"
// import Script from 'react-load-script'

class EventDetailInfo extends Component {
    state={
        showMap: false
    }
    
    toggleShowMap = () => {
        this.setState((prevState) => {
            return {
                showMap: !prevState.showMap
            }
        })
    }
    
    render() {
        // let {description, date, venue, venueLatLng} = this.props.event
        const {event} = this.props
        return (
            <Segment.Group>
               
                <Segment attached="top">
                    <Grid>
                        <Grid.Column width={1}>
                            <Icon size="large" color="teal" name="info" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p>{event.description}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={1}>
                            <Icon name="calendar" size="large" color="teal" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <span> { new Date(event.date.toDate()).toLocaleString('en-US',  { weekday: 'short', month: 'long', day: '2-digit' })  }</span>
                            <span> from { new Date(event.timeStart).toLocaleString('en-US',  { hour12: true, hour: 'numeric', minute: 'numeric' } )  }</span>
                            <span> to { new Date(event.timeEnd).toLocaleString('en-US',  { hour12: true, hour: 'numeric', minute: 'numeric' } )  }</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={1}>
                            <Icon name="marker" size="large" color="teal" />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <a target='_blank' href={`https://www.google.com/maps/place/@${event.geolocation.lat},${event.geolocation.lng}`} >{event.address}</a>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button color="teal" size="tiny" content={this.state.showMap ? 'Hide Map' : "Show Map"} onClick={this.toggleShowMap} />
                        </Grid.Column>
                    </Grid>
                </Segment>
                
            </Segment.Group>
        )
    }
}


export default EventDetailInfo