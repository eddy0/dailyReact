import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {reduxForm, Field} from 'redux-form'
import {compose} from 'redux'
import {withFirestore} from 'react-redux-firebase'
import {combineValidators, composeValidators, isRequired, hasLengthGreaterThan} from 'revalidate'

import {connect} from 'react-redux'
import TextInput from '../Form/TextInput'
import SelectInput from '../Form/SelectInput'
import TextArea from '../Form/TextArea'
import DateInput from '../Form/DateInput'
import TimeInput from '../Form/TimeInput'
import {Values} from 'redux-form-website-template'
import PlaceInput from '../Form/PlaceInput'
import {handleCreateEvent} from '../../action/event'




class EventForm extends Component {
    
    onFormSubmit = (values) => {
        let event = this.props.initialValues
        if (event.id) {
            // this.props.handleUpdateEvent(value, () => {
            //     this.props.history.goBack()
            // })
            //
        } else {
            if (!values.geolocation) {
                values.geolocation = {
                    lat: 0,
                    lng: 0,
                }
            }
            this.props.handleCreateEvent(values)
            this.props.history.push('/events')
        }
    }
    
    checkChange = ({lat, lng}) => {
        this.props.change('geolocation', {
            lat: lat,
            lng: lng,
        })
    }
    
    render() {
        const {invalid, submitting, pristine, handleSubmit} = this.props
        return (
            <Grid>
                <Grid.Column width={15}>
                    <Segment>
                        <Header as='h2' textAlign='center'>
                            New Event
                        </Header>
                        <Form onSubmit={handleSubmit(this.onFormSubmit) } autoComplete="off">
                            <Header as='h4' dividing>
                                About Event
                            </Header>
                            <Field
                                name="title"
                                label="Title"
                                placeholder="enter the title"
                                component={TextInput}
                                required={true}
                            />
                            <Field
                                name="category"
                                label="Category"
                                placeholder="enter the title"
                                component={SelectInput}
                                multiple={false}
                                required={true}
                            />
                            <Field
                                name="description"
                                type="text"
                                rows="2"
                                label="Description"
                                component={TextArea}
                                placeholder="Event brief description, less than 140 words"
                                required={true}
                            />
                            <Field
                                name="details"
                                type="text"
                                rows="4"
                                label="Details"
                                component={TextArea}
                                placeholder="Write some details of this the event"
                                required={true}
                            />
                            <Field
                                name="capacity"
                                type="number"
                                label="People capacity"
                                placeholder="enter the how many people"
                                component={TextInput}
                                required={true}
                            />
                            <Header as='h4' dividing>
                                About Date
                            </Header>
                            <Field
                                name="date"
                                type='text'
                                label="please enter the date of the event"
                                component={DateInput}
                                onFocus={e => e.preventDefault()}
                                onBlur={e => e.preventDefault()}
                                required={true}
                            />
                            
                            <Field
                                name="timeStart"
                                type="text"
                                label="Start time"
                                component={TimeInput}
                                placeholder="from"
                                required={true}
                            />
                            <Field
                                name="timeEnd"
                                type="text"
                                label="End time"
                                component={TimeInput}
                                placeholder="to"
                                required={true}
                            />
                            <Header as='h4' dividing>
                                About Address
                            </Header>
                            <Field
                                name="company"
                                label="Business name"
                                placeholder="the business address name"
                                component={TextInput}
                                required={true}
                            />
                            <Field
                                label="Add the address"
                                name='address'
                                type='text'
                                component={PlaceInput}
                                checkChange={this.checkChange}
                                options={{types: ['(cities)']}}
                                placeholder="City event is taking place"
                            />
                            <div>
                                <Button positive type="submit" disabled={invalid || submitting || pristine}>
                                    Submit
                                </Button>
                                <Button type="button" onClick={() => this.props.history.goBack()}>Cancel</Button>
                            </div>
                        </Form>
                    </Segment>
                    <Segment>
                        <Values form="eventForm" />
                    </Segment>
                </Grid.Column>
            
            </Grid>
        )
    }
}

const validate = combineValidators({
    title: isRequired({message: 'the title is required'}),
    category: isRequired({message: 'the category is required'}),
    description: composeValidators(
        isRequired({message: 'the description is required'}),
        hasLengthGreaterThan(4)({message: 'the description more than 4'}),
    )(),
    address: isRequired('address'),
})


const mapStateToProps = (state, props) => {
    let event = {}
    const id = props.match.params.id
    if (id) {
        const storeEvents = state.firestore.ordered.events
        if (storeEvents && storeEvents[0] && storeEvents[0].id === id ) {
            event = storeEvents[0]
        }
    }
  
    return {
        initialValues: event,
    }
}

const actions = {
    handleCreateEvent
}

export default compose(
    withFirestore,
    connect(mapStateToProps, actions),
)
(reduxForm({form: 'eventForm', enableReinitialize: true, validate,})(EventForm))