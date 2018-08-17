import React, {Component} from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleCreateEvent, handleUpdateEvent} from '../../../app/redux/actions/events'


class EventForm extends Component {
    
    state = {
        event: this.props.event,
    }
    
    onFormSubmit = (e) => {
        e.preventDefault()
        if (this.state.event.id) {
            this.props.dispatch(handleUpdateEvent(this.state.event, () => {
                    this.props.history.goBack()
                }))
            
        } else {
            this.props.dispatch(handleCreateEvent(this.state.event))
                .then(() => {
                    this.props.history.push('/events')
                })
            
        }
    }
    
    handleChange = (e) => {
        let {name, value} = e.target
        this.setState((prevState) => {
            return {
                event: {
                    ...prevState.event,
                    [name]: value,
                },
            }
        })
    }
    
    render() {
        console.log(this.state)
        const {title, city, venue, hostedBy, date} = this.state.event
        const {selectedEvent} = this.props
        return (
            <Segment>
                <Form onSubmit={this.onFormSubmit}>
                    <Form.Field>
                        <label>Event Title</label>
                        <input name='title' value={title} onChange={this.handleChange} placeholder="First Name" />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input name='date' value={date} onChange={this.handleChange} type="date" placeholder="Event Date" />
                    </Form.Field>
                    <Form.Field>
                        <label>City</label>
                        <input name='city' value={city} onChange={this.handleChange} placeholder="City event is taking place" />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input name='venue' value={venue} onChange={this.handleChange} placeholder="Enter the Venue of the event" />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input name='hostedBy' value={hostedBy} onChange={this.handleChange} placeholder="Enter the name of person hosting" />
                    </Form.Field>
                    <Button positive type="submit">
                        {
                            selectedEvent === null
                                ? 'Submit'
                                : 'Update'
                        }
                    </Button>
                    <Button type="button" onClick={() => this.props.history.goBack()}>Cancel</Button>
                </Form>
            </Segment>
        )
    }
}


const mapStateToProps = (state, props) => {
    let event = {
        title: '',
        city: '',
        venue: '',
        hostedBy: '',
        date: '',
    }
    
    let {id} = props.match.params
    if (id && state.events.length > 0) {
        event = state.events.filter((event) => event.id === id)[0]
        event = Object.assign({}, event)
    }
    console.log('event', event)
    
    return {
        event,
    }
}

export default connect(mapStateToProps)(EventForm)