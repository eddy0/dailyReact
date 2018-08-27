import React from 'react'
import {Form, Segment, Button, List, Message, Label, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import TextInput from './TextInput'
import SocialLogin from './SocialLogin'



const LoginForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <Segment style={{boxShadow: '0 0.3rem 1rem rgba(0,0,0,0.3)'}}>
            <Form>
                <Field
                    name="email"
                    type="text"
                    label='Email'
                    placeholder='email'
                    required={true}
                    component={TextInput}
                />
                <Field
                    required={true}
                    label='password'
                    name="password"
                    component={TextInput}
                    type="password"
                    placeholder="password"
                />
                <List horizontal>
                    <Button fluid size="large" color="teal">
                        Login
                    </Button>
                    <Button fluid size="large" color="teal">
                        Sign up
                    </Button>
                </List>
                <Divider horizontal>
                    or
                </Divider>
                <SocialLogin />
            </Form>
        
        </Segment>
    
    )
}

export default connect()(reduxForm({form: 'loginForm'})(LoginForm))