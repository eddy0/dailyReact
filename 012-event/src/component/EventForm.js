import React, {Component} from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleCreateEvent} from '../action/event'
import PlacesAutocomplete from 'react-places-autocomplete';

class EventForm extends Component {

    state = {
        ...this.props.event
    }
    
    handleInput = (e) => {
        let key = e.target.name
        let value = e.target.value
        this.setState({
            [key]: value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e, this.props, this.state)
        this.props.history.push('/event')
        this.props.dispatch(handleCreateEvent(this.state))
    }
    
    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push('/event')
    }
    
    render() {
        let { title='', date='', location='', hostedBy='', description=''} = this.state
        return (
            <div>
                <h1>New Event</h1>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <input onChange={this.handleInput} value={title}  name='title' placeholder='Event Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input onChange={this.handleInput} name='date' value={date}  type='date' placeholder='Event Date' />
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <input onChange={this.handleInput} name='location' value={location} placeholder='Enter the venue of event' />
                    </Form.Field>
                    <Form.Field>
                        <label>Description</label>
                        <input onChange={this.handleInput} name='description' value={description} placeholder='Enter the description of event' />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input onChange={this.handleInput} name='hostedBy' value={hostedBy} placeholder='Enter the name of Host' />
                    </Form.Field>
                   <div style={{marginLeft:'auto', width: 'max-content'}}>
                    <Button positive type='submit' onClick={this.handleSubmit} >Submit</Button>
                    <Button onClick={this.handleCancel}  >Cancel</Button>
                   </div>
                </Form>
            </Segment>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    
    let {id} = props.match.params
    
    let form = {
        title: '',
        date: '',
        location: '',
        hostedBy: '',
        description: '',
        attendees: [],
    }
    if (id && state.events.length > 0) {
        form = state.events.filter((event) => event.id === id)[0]
    }
    return {
        event: form,
    }

}

export default connect(mapStateToProps)(EventForm)