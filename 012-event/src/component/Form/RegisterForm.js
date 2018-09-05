import React from 'react'
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import SocialLogin from './SocialLogin'
import TextInput from './TextInput'
import {combineValidators, isRequired} from 'revalidate'
import {handleRegister} from '../../action/auth'


const RegisterForm = (props) => {
    
    const {error, handleSubmit, handleRegister, pristine, invalid, submitting} = props
    console.log('error', error)
    
    return (
        <div>
            <Form size="small"  onSubmit={handleSubmit(handleRegister)} >
                <Segment>
                    <Field
                        name="displayName"
                        type="text"
                        label='displayName'
                        component={TextInput}
                        placeholder="Known As"
                    />
                    <Field
                        name="email"
                        type="email"
                        label='Email'
                        component={TextInput}
                        placeholder="Email"
                    />
                    <Field
                        name="password"
                        type="password"
                        label='Password'
                        component={TextInput}
                        placeholder="Password"
                    />
                    <div style={{padding: '1rem 0', height: 55}}>
                        { error &&
                        <Label  color='red' content={error} />
                        }
                    </div>
                    <Button disabled={invalid ||pristine || submitting} fluid size="large" color="teal">
                        Register
                    </Button>
                    <Divider horizontal>
                        OR
                    </Divider>
                    <SocialLogin  />
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