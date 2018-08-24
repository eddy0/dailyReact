import React, {Component} from 'react'
import {Grid, Button, Loader} from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import {connect} from 'react-redux'
import { handleDeleteEvent, getEventForDashBoard} from '../../../app/redux/actions/events'
import Loading from '../../../app/layout/Loading'
import EventActivity from '../EventActivity/EventActivity'
import {firestoreConnect, isEmpty, isLoaded} from 'react-redux-firebase'
import {compose} from 'redux'



class EventDashboard extends Component {
    state = {
        moreEvents: false,
        initial:true,
        loadedEvents: [],
    }
    
    async componentDidMount() {
        let next = await this.props.getEventForDashBoard()
        if (next && next.docs && next.docs.length > 1) {
            this.setState({
                moreEvents: true,
                initial:false,
         
            })
        }
    }
    
    handleContextRef = (contextRef) => this.setState({ contextRef })
    
    getNextEvents = async () => {
        const {events} = this.props
        let lastEvent = events && events[events.length - 1]
        let next = await this.props.getEventForDashBoard(lastEvent)
        console.log('next',lastEvent, next)
    
        if (next && next.docs && next.docs.length <= 1) {
            this.setState({
                moreEvents: false
            })
        }
    }
    
    componentDidUpdate(props) {
        if ( props.events !== this.props.events ) {
            this.setState({
                loadedEvents: [ ...this.state.loadedEvents, ...this.props.events]
            })
        }
    
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
        const { loading, activities} = this.props
        const {moreEvents, loadedEvents} = this.state
        const { contextRef } = this.state
        if (loading && this.state.initial) {
            return <Loading />
        }
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <div   ref={this.handleContextRef}>
                    <EventList
                        events={loadedEvents}
                        deleteEvent={this.handleDeleteEvent}
                        getNextEvents={this.getNextEvents}
                        loading={loading}
                        moreEvents={moreEvents}
                    />
                    </div>
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <EventActivity contextRef={contextRef}  activites={activities}/>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Loader active={loading}/>

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
        activities: state.firestore.ordered.activity
    }
}

const actions = {
    handleDeleteEvent,
    getEventForDashBoard
}

const query = [
    {
        collection: 'activity',
        orderBy: ['timestamp', 'desc'],
        limit: 5
    },
]

export default compose(
    firestoreConnect(query),
    connect(mapStateToProps, actions)
)(EventDashboard)
