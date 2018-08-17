import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleCreateEvent, handleUpdateEvent} from '../../../app/redux/actions/events'
import {reduxForm, Field} from 'redux-form'
import TextInput from './TextInput'
import TextArea from './TextArea'
import SelectInput from './SelectInput'

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks', icon:'smile'},
    {key: 'culture', text: 'Culture', value: 'culture', icon:'coffee' },
    {key: 'film', text: 'Film', value: 'film',  icon:'film'},
    {key: 'food', text: 'Food', value: 'food',  icon:'utensils', },
    {key: 'music', text: 'Music', value: 'music', icon:'music', },
    {key: 'travel', text: 'Travel', value: 'travel', icon:'plane', },
];



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
        console.log(this.props)
        const {title, city, venue, hostedBy, date} = this.state.event
        const {selectedEvent} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                <Segment>
                    <Form onSubmit={this.onFormSubmit}>
                        <Header sub color='teal' content='Event Details' />
                        <Field name='title' type='text' component={TextInput} placeholder="Event Title"/>
                        <Field name='category' type='text' options={category} component={SelectInput} placeholder="Event category"/>
                        <Field name='description' type='text' rows='3' component={TextArea} placeholder="Event description"/>
                        <Header sub color='teal' content='Event Location' />
    
                        <Field name='city' type='text' component={TextInput} placeholder="City event is taking place"/>
                        <Field name='venue' type='text' component={TextInput} placeholder="Enter the Venue of the event"/>
                        <Field name='date' type='text' component={TextInput} placeholder="Event Date"/>
            
            
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
                </Grid.Column>
            </Grid>
            
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

export default connect(mapStateToProps)(reduxForm({form: 'eventForm'})(EventForm))