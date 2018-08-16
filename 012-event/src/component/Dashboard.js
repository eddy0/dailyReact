import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import EventList from './EventList'
import EventForm from './EventForm'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import Model from './Modal'


class Dashboard extends Component {
    state = {
        model: false
    }
    
    handleModel = () => {
        this.setState((prevState) => {
            return {
                model: !prevState.model
            }
        })
    }
    
    render() {
        let {events} = this.props
        
        return (
            <Grid>
                <Grid.Column width={10}>
                    <h2>Event List</h2>
                    {
                        events.map((event) => {
                            return <EventList key={event.id} {...event} match={this.props.match} />
                        })
                    }
                    
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <h2>recent activites</h2>
                    <Button positive inverted size='large' onClick={this.handleModel} >open model</Button>
                    <Model/>
                </Grid.Column>
               
                
                
            
            </Grid>
        )
    }
}


const mapStateToProps = ({events}) => {
    events = Object.keys(events).map((id) => {
        return events[id]
    })
    return {
        events,
    }
}

export default connect(mapStateToProps)(Dashboard)