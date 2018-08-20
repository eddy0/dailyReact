import React from 'react'
import {Form, Segment, Button, Label} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import TextInput from '../../event/EventForm/TextInput'
import {connect} from 'react-redux'
import {handleRegister} from '../../../app/redux/actions/auth'
import {combineValidators, isRequired} from 'revalidate'




const RegisterForm = (props) => {
    
    const {handleSubmit, handleRegister, error, invalid, submitting} = props
    
    return (
        <div>
            <Form size="large" onSubmit={handleSubmit(handleRegister)}>
                <Segment>
                    <Field
                        name="displayName"
                        type="text"
                        component={TextInput}
                        placeholder="Known As"
                    />
                    <Field
                        name="email"
                        type="text"
                        component={TextInput}
                        placeholder="Email"
                    />
                    <Field
                        name="password"
                        type="password"
                        component={TextInput}
                        placeholder="Password"
                    />
                    {error &&  <Label  color='red' content={error} />}
    
                    <Button disabled={invalid || submitting } fluid size="large" color="teal">
                        Register
                    </Button>
                </Segment>
            </Form>
        </div>
    )
}

const validate = combineValidators({
    displayName: isRequired('displayName'),
    email: isRequired('email'),
    password: isRequired('password'),
})

export default connect(null, {handleRegister})(reduxForm({form: 'registerForm', validate} )(RegisterForm))