import React, {Component} from 'react'
import {Grid, Button} from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'
import {connect} from 'react-redux'
import {createEvent, handleDeleteEvent, handleUpdateEvent} from '../../../app/redux/actions/events'



class EventDashboard extends Component {
    state = {
        isOpen: false,
        selectedEvent: null,
    }
    
    
    handleFormCancel = () => {
        this.setState({
            isOpen: false,
            selectedEvent: null,
        })
    }
    
    
    handleDeleteEvent = (id) => {
        this.props.handleDeleteEvent(id, () => {
            console.log('ok', this.state)
        })
    }
    
    
    render() {
        const {events} = this.props
        const { selectedEvent} = this.state
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} deleteEvent={this.handleDeleteEvent}  />
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <Button positive content={'Create Event'} onClick={this.handleFormOpen} />
                    
                
                </Grid.Column>
            
            </Grid>
        )
    }
}

const mapStateToProps = ({events}) => {
    return {
            events,
        }
}


export default connect(mapStateToProps, { createEvent,handleUpdateEvent,handleDeleteEvent,})(EventDashboard)