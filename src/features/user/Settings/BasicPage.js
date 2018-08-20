import React, {Component} from 'react'
import {Segment, Form, Header, Divider, Button} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import DateInput from '../../event/EventForm/DateInput'
import PlaceInput from '../../event/EventForm/PlaceInput'
import TextInput from '../../event/EventForm/TextInput'
import RadioInput from '../../event/EventForm/RadioInput'


class BasicPage extends Component {
    
    render() {
        const {pristine, submitting, handleSubmit, updateProfile} = this.props
    
        return (
            <Segment>
                <Header dividing size='large' content='Basics' />
                <Form onSubmit={handleSubmit(updateProfile)} >
                    <Field
                        width={8}
                        name='displayName'
                        type='text'
                        component={TextInput}
                        placeholder='Known As'
                    />
                    <Form.Group inline>
                        <label >Gendar:</label>
                        <Field
                            name='gender'
                            type='radio'
                            value='male'
                            label='Male'
                            component={RadioInput}
                        />
                        <Field
                            name='gender'
                            type='radio'
                            value='female'
                            label='Female'
                            component={RadioInput}
                        />
                    </Form.Group>
                    <Field
                        width={8}
                        name='dateOfBirth'
                        component={DateInput}
                        placeholder='Date of Birth'
                        dropdownMode="select"
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        
                    />
                    <Field
                        name='city'
                        placeholder='Home Town'
                        options={{types: ['(cities)']}}
                        label='Female'
                        component={PlaceInput}
                        width={8}
                    />
                    <Divider/>
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile'/>
                </Form>
            </Segment>
        );
    }
}



export default reduxForm({form: 'userProfile', enableReinitialize:true, destroyOnUnmount: false} )(BasicPage)

