import React from 'react'
import {Form, Segment, Button, Message, Label, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import TextInput from './TextInput'
import SocialLogin from './SocialLogin'


const LoginForm = (props) => {
    console.log('props', props)
    
    const {error, handleSubmit} = props
    return (
        <Segment style={{marginTop: 100}}>
            <Form success>
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
                <Button fluid size="large" color="teal"  >
                    Login
                </Button>
                <Divider horizontal>
                    or
                </Divider>
                <SocialLogin/>
            </Form>
            
            </Segment>
       
    )
}



export default connect()(reduxForm({form: 'loginForm'})(LoginForm))