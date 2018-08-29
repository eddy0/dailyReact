import React, {Component} from 'react'
import {Form, Segment, Button, Grid, Header} from 'semantic-ui-react'
import {reduxForm, Field} from 'redux-form'
import TextInput from './TextInput'
import SelectInput from './SelectInput'
import TextArea from './TextArea'
import DateInput from './DateInput'
import TimeInput from './TimeInput'

class EventForm extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Segment>
                        <Header textAlign='center' dividing>
                            New  Event
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
                                required={true}
                            />
                            <Field name="details"
                                type="text"
                                rows="4"
                                label="from"
                                component={TimeInput}
                                placeholder="Write some details of this the event"
                                required={true}
                            />

                        </Form>
                    </Segment>
                </Grid.Column>

            </Grid>
        )
    }
}

export default reduxForm({form: 'eventForm'})(EventForm)