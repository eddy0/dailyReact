import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './EventForm'
import {connect} from 'react-redux'
import {handleInitialEvents} from '../action/share'



class Dashboard extends Component {
    
    componentDidMount() {
        this.props.dispatch(handleInitialEvents())
    }
    
    render() {
        let {events} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Event List</h2>
                    {
                        events.map((event) => {
                            return <EventList key={event.id} {...event} />
                        })
                    }
                   
                
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <h2>side bar</h2>
                    <EventForm />
                
                </Grid.Column>
            
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        events: state.events
    }
}

export default connect(mapStateToProps)(Dashboard)