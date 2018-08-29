import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {reduxForm, Field} from 'redux-form'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import TextArea from './TextArea'
import DateInput from './DateInput'
import TimeInput from './TimeInput'
import {Values} from 'redux-form-website-template'
import PlaceInput from './PlaceInput'



class EventForm extends Component {
    render() {
        const {invalid,  submitting,  pristine} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Header textAlign='center' dividing>
                            New Event
                        </Header>
                        <Form>
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
                                multiple={true}
                                required={true}
                            />
                            <Field name="description"
                                type="text"
                                rows="2"
                                label="Description"
                                component={TextArea}
                                placeholder="Event brief description, less than 140 words"
                                required={true}
                            />
                            <Field name="details"
                                type="text"
                                rows="4"
                                label="Details"
                                component={TextArea}
                                placeholder="Write some details of this the event"
                                required={true}
                            />
                            <Field
                                name="date"
                                label="please enter the date of the event"
                                component={DateInput}
                                onFocus={e => e.preventDefault()}
                                onBlur={e => e.preventDefault()}
                                required={true}
                            />
                            <Form.Group inline>
                                <Field
                                    name="timeStart"
                                    type="text"
                                    label="From"
                                    component={TimeInput}
                                    placeholder="from"
                                    required={true}
                                />
                                <Field
                                    name="timeEnd"
                                    type="text"
                                    label="To"
                                    component={TimeInput}
                                    placeholder="to"
                                    required={true}
                                />
                            </Form.Group>
                            <Field
                                label="Add the address"
                                name='city'
                                type='text'
                                component={PlaceInput}
                                options={{types: ['(cities)']}}
                                placeholder="City event is taking place"
                            />
                            <Button positive type="submit" disabled={invalid || submitting || pristine}>
                                Submit
                            </Button>
                            <Button type="button" onClick={() => this.props.history.goBack()}>Cancel</Button>
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


export default reduxForm({form: 'eventForm'})(EventForm)