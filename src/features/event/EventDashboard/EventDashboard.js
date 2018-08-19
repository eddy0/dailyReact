import React, {Component} from 'react'
import {Grid, Button} from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid'
import {connect} from 'react-redux'
import {createEvent, handleDeleteEvent, handleUpdateEvent} from '../../../app/redux/actions/events'
import {openModal} from '../../../app/redux/actions/modal'
import Loading from '../../../app/layout/Loading'
import EventActivity from '../EventActivity/EventActivity'



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
        const {events, loading} = this.props
        // console.log(this.props)
        return (
            <Grid>
                <Grid.Column width={10}>
                    {
                        this.props.loading
                            ? <Loading />
                            :  <EventList events={events} deleteEvent={this.handleDeleteEvent} />
    
                    }
                   
                </Grid.Column>
                
                <Grid.Column width={6}>
                    {/*<Button positive content={'Create Event'} onClick={this.handleFormOpen} />*/}
                    {/*<Button positive content={'Open Modal'} onClick={() => this.props.openModal('TestModal', null)} />*/}
                    <EventActivity/>
                </Grid.Column>
            
            </Grid>
        )
    }
}


const mapStateToProps = ({events, loading}) => {
    return {
        events,
        loading,
        
    }
}

export default connect(mapStateToProps, {createEvent, handleUpdateEvent, handleDeleteEvent, openModal})(EventDashboard)