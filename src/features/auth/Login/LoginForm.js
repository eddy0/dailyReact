import React from 'react'
import {Form, Segment, Button, Label, Divider} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import TextInput from '../../event/EventForm/TextInput'
import {connect} from 'react-redux'
import {handleLogin, handleSocialLogin} from '../../../app/redux/actions/auth'
import {toastr} from 'react-redux-toastr'
import SocialLogin from '../SocialLogin/SocialLogin'



const LoginForm = (props) => {
    const {error, handleSubmit} = props
    return (
        <Form error size="large" onSubmit={handleSubmit((values) => props.dispatch(handleLogin(values)))} >
            <Segment>
                <Field
                    name="email"
                    component={TextInput}
                    type="text"
                    placeholder="Email Address"
                />
                <Field
                    name="password"
                    component={TextInput}
                    type="password"
                    placeholder="password"
                />
               
                {error &&  <Label  color='red' content={error} />}
                
                <Button fluid size="large" color="teal"  >
                    Login
                </Button>
                <Divider horizontal>
                    or
                </Divider>
                <SocialLogin />
            </Segment>
        </Form>
    )
}

export default connect()(reduxForm({form: 'loginForm'})(LoginForm))