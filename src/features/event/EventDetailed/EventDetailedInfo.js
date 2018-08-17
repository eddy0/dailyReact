import React, {Component} from 'react'

import {Grid,  Segment, Button, Icon} from 'semantic-ui-react'


class EventDetailedInfo extends Component {
    render() {
        let {description, date, venue} = this.props.event
    
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
                            <span>{date}</span>
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
                            <Button color="teal" size="tiny" content="Show Map" />
                        </Grid.Column>
                    </Grid>
                </Segment>
            </Segment.Group>
        )
    }
}


export default EventDetailedInfo