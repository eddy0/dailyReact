import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {handleCreateEvent, handleUpdateEvent, handleToggleCancelEvent} from '../../../app/redux/actions/events'
import {reduxForm, Field} from 'redux-form'
import TextInput from './TextInput'
import TextArea from './TextArea'
import SelectInput from './SelectInput'
import DateInput from './DateInput'
import {combineValidators, composeValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import PlaceInput from './PlaceInput'
import {withFirestore} from 'react-redux-firebase'



const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks', icon: 'smile'},
    {key: 'culture', text: 'Culture', value: 'culture', icon: 'coffee'},
    {key: 'film', text: 'Film', value: 'film', icon: 'film'},
    {key: 'food', text: 'Food', value: 'food', icon: 'utensils'},
    {key: 'music', text: 'Music', value: 'music', icon: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel', icon: 'plane'},
]


class EventForm extends Component {
    
    async componentDidMount() {
        const {match, firestore} = this.props
        let id = match.params.id
        if (id) {
            await firestore.setListener(`events/${match.params.id}`)
        }
    }
    
    async componentWillUnmount() {
        const {firestore} = this.props
        await firestore.unsetListener(`events`)
    }
    
    onFormSubmit = (value) => {
        let event = this.props.initialValues
        console.log('event', event)
        
        if (event.id) {
            this.props.dispatch(handleUpdateEvent(value, () => {
                this.props.history.goBack()
            }))
            
        } else {
            this.props.dispatch(handleCreateEvent(value))
            this.props.history.push('/events')
        }
        
    }
    
    checkChange = ({lat, lng}) => {
        console.log('this.props value on change', lat, lng)
        this.props.change('venueLatLng', {
            lat: lat,
            lng: lng,
        })
        
    }
    
    render() {
        console.log(this.props.initialValues)
        // const {title, city, venue, hostedBy, date} = this.props.event
        const {invalid, submitting, pristine} = this.props
        const {initialValues, handleToggleCancelEvent} = this.props
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
                            
                            <Field name='city' type='text' component={PlaceInput} options={{types: ['(cities)']}} placeholder="City event is taking place" />
                            <Field name='venue' type='text' onSelect={this.getLocation} checkChange={this.checkChange} component={PlaceInput} options={{types: ['establishment']}} placeholder="Enter the Venue of the event" />
                            <Field name='date' type='text' dateFormat='MM-DD-YYYY HH:mm' timeFormat='HH:mm' showTimeSelect component={DateInput} placeholder="Event Date" />
                            
                            <Button positive type="submit" disabled={invalid || submitting || pristine}>
                                Submit
                            </Button>
                            <Button type="button" onClick={() => this.props.history.goBack()}>Cancel</Button>
                            {
                                initialValues && Object.keys(initialValues).length > 0 &&
                                <Button
                                    type="button"
                                    onClick={() => handleToggleCancelEvent(initialValues, () => this.props.history.goBack())}
                                    color={initialValues.cancelled ? 'green' : 'red'}
                                    content={initialValues.cancelled ? 'retrieve' : 'cancel'}
                                    floated='right'
                                />
                            }
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
    const {match} = props
    let id = match.params.id
    let event = {}
    let firestoreEvent = state.firestore.ordered.events
    if (id && firestoreEvent && firestoreEvent[0]) {
        event = firestoreEvent[0]
    }
    
    return {
        initialValues: event,
    }
}

export default withFirestore(
    connect(mapStateToProps, {handleToggleCancelEvent})
    (reduxForm({
        form: 'eventForm', enableReinitialize: true, validate,
    })(EventForm)))