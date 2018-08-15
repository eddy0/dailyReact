import React, {Component} from 'react'
import { Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './EventForm'


class Dashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Event List</h2>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                    <EventList/>
                </Grid.Column>
    
                <Grid.Column width={6}  >
                    <h2>side bar</h2>
                    <EventForm/>
    
                </Grid.Column>

            </Grid>
        )
    }
}


export default Dashboard