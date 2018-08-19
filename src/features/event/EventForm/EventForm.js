import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleCreateEvent, handleUpdateEvent} from '../../../app/redux/actions/events'
import {reduxForm, Field} from 'redux-form'
import TextInput from './TextInput'
import TextArea from './TextArea'
import SelectInput from './SelectInput'
import DateInput from './DateInput'
import {combineValidators, composeValidators, createValidator, isRequired, hasLengthGreaterThan} from 'revalidate'
import moment from 'moment'



const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks', icon: 'smile'},
    {key: 'culture', text: 'Culture', value: 'culture', icon: 'coffee'},
    {key: 'film', text: 'Film', value: 'film', icon: 'film'},
    {key: 'food', text: 'Food', value: 'food', icon: 'utensils'},
    {key: 'music', text: 'Music', value: 'music', icon: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel', icon: 'plane'},
]


class EventForm extends Component {
    
    onFormSubmit = (value) => {
        console.log('e', value, this.props)
        value.date = moment(value.date).format()
        let event = this.props.initialValues
        if (event.id) {
            this.props.dispatch(handleUpdateEvent(value, () => {
                this.props.history.goBack()
            }))
            
        } else {
            this.props.dispatch(handleCreateEvent(value))
                .then(() => {
                    this.props.history.push('/events')
                })
            
        }
    }
    
    render() {
        // console.log(this.props)
        // const {title, city, venue, hostedBy, date} = this.props.event
        const {invalid, submitting, pristine} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
                            <Header sub color='teal' content='Event Details' />
                            <Field name='title' type='text' component={TextInput} placeholder="Event Title" />
                            <Field name='category' type='text' options={category} component={SelectInput} placeholder="Event category" />
                            <Field name='description' type='text' rows='3' component={TextArea} placeholder="Event description" />
                            <Header sub color='teal' content='Event Location' />
                            
                            <Field name='city' type='text' component={TextInput} placeholder="City event is taking place" />
                            <Field name='venue' type='text' component={TextInput} placeholder="Enter the Venue of the event" />
                            <Field name='date' type='text' dateFormat='MM-DD-YYYY HH:mm' timeFormat='HH:mm' showTimeSelect component={DateInput} placeholder="Event Date" />
                            
                            <Button positive type="submit" disabled={invalid || submitting || pristine}>
                                Submit
                            </Button>
                            <Button type="button" onClick={() => this.props.history.goBack()}>Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        
        )
    }
}


const validate = combineValidators({
    title: isRequired({message: 'the title is required'}),
    category: isRequired({message: 'the title is required'}),
    description: composeValidators(
        isRequired({message: 'the title is required'}),
        hasLengthGreaterThan(4)({message: 'the description more than 4'}),
    )(),
    city: isRequired('city'),
    venue: isRequired('venue'),
})

const mapStateToProps = (state, props) => {
    let event = {}
    let {id} = props.match.params
    if (id && state.events.length > 0) {
        event = state.events.filter((event) => event.id === id)[0]
        event = Object.assign({}, event)
    }
    return {
        initialValues: event,
    }
}

export default connect(mapStateToProps)(reduxForm({form: 'eventForm', enableReinitialize: true, validate})(EventForm))