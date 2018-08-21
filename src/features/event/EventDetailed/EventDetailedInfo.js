import React, {Component} from 'react'
import {Grid,  Segment, Button, Icon} from 'semantic-ui-react'
import EventDetailedMap from './EventDetailedMap'
import format from "date-fns/format"

class EventDetailedInfo extends Component {
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
        let {description, date, venue, venueLatLng} = this.props.event
    
        return (
            <Segment.Group>
                <Segment attached="top">
                    <Grid>
                        <Grid.Column width={1}>
                            <Icon size="large" color="teal" name="info" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <p>{description}</p>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={1}>
                            <Icon name="calendar" size="large" color="teal" />
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <span> {format(Date(date), 'dddd Do MMMM')} at {format(Date(date), 'HH:mm' )}</span>
                        </Grid.Column>
                    </Grid>
                </Segment>
                <Segment attached>
                    <Grid verticalAlign="middle">
                        <Grid.Column width={1}>
                            <Icon name="marker" size="large" color="teal" />
                        </Grid.Column>
                        <Grid.Column width={11}>
                            <span>{venue}</span>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <Button color="teal" size="tiny" content={this.state.showMap ? 'Hide Map' : "Show Map"} onClick={this.toggleShowMap} />
                        </Grid.Column>
                    </Grid>
                </Segment>
                {
                    this.state.showMap &&
                    <EventDetailedMap location={venueLatLng} />
                }
            </Segment.Group>
        )
    }
}


export default EventDetailedInfo