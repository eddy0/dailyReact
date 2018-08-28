import React from 'react'
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import SocialLogin from './SocialLogin'
import TextInput from './TextInput'



const RegisterForm = (props) => {
    
    const {handleSubmit, handleRegister, error, invalid, submitting} = props
    
    return (
        <div>
            <Form size="small" >
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
                    <Button disabled={invalid || submitting} fluid size="large" color="teal">
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

export default connect(null, {})(reduxForm({form: 'registerForm'})(RegisterForm))