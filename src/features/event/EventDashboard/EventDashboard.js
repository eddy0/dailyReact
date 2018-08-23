import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import {connect} from 'react-redux'
import { handleDeleteEvent, getEventForDashBoard} from '../../../app/redux/actions/events'
import Loading from '../../../app/layout/Loading'
import EventActivity from '../EventActivity/EventActivity'
import {firestoreConnect, isEmpty, isLoaded} from 'react-redux-firebase'
import {compose} from 'redux'



class EventDashboard extends Component {
    state = {
        isOpen: false,
        selectedEvent: null,
    }
    
    componentDidMount() {
        this.props.dispatch(getEventForDashBoard())
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
        
        if (isLoaded(events) === false && isEmpty(events) === true) {
            return <Loading />
        }
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}  deleteEvent={this.handleDeleteEvent} />
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <EventActivity/>
                </Grid.Column>
            
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    let events = state.events
  
    return {
        events,
        loading: state.loading,
    }
}

const actions = {
    handleDeleteEvent
}

export default compose(
    firestoreConnect(['events']),
    connect(mapStateToProps)
)(EventDashboard)
