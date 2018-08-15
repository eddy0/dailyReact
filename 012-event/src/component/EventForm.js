import React, {Component} from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'



class EventForm extends Component {
    
    
    handleInput = (e) => {
        let key = e.target.name
        let value = e.target.value
        this.setState({
            [key]: value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(e, this.props)
    }
    
    handleCancel = (e) => {
        e.preventDefault()
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <h1>New Event</h1>
            <Segment>
                <Form>
                    <Form.Field>
                        <label>Event Title</label>
                        <input onChange={this.handleInput}  name='title' placeholder='Event Title' />
                    </Form.Field>
                    <Form.Field>
                        <label>Event Date</label>
                        <input onChange={this.handleInput} name='date'  type='date' placeholder='Event Date' />
                    </Form.Field>
                    <Form.Field>
                        <label>Venue</label>
                        <input onChange={this.handleInput} name='city' placeholder='Enter the venue of event' />
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By</label>
                        <input onChange={this.handleInput} name='host' placeholder='Enter the name of Hoster' />
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


export default EventForm