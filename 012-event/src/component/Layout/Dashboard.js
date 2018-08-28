import React, {Component} from 'react'
import {Grid, Header, Container} from 'semantic-ui-react'
import EventList from '../Event/EventList'



class Dashboard extends Component {
    render() {
        return (
            <Container>
            <Grid style={{marginTop: '6rem'}}>
                
                <Grid.Column width={10}>
                    <Header textAlign='center' >list</Header>
                    <EventList />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header textAlign ='center' >activities</Header>
                </Grid.Column>
             
            </Grid>
            </Container>
            
        )
    }
}

export default Dashboard