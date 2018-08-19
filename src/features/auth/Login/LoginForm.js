import React from 'react'
import {Form, Segment, Button} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import TextInput from '../../event/EventForm/TextInput'
import {connect} from 'react-redux'
import {handleLogin} from '../../../app/redux/actions/auth'
import {toastr} from 'react-redux-toastr'



const LoginForm = (props) => {
    return (
        <Form error size="large" onSubmit={props.handleSubmit((values) => props.dispatch(handleLogin(values, () => toastr.success('Success', 'you have logined in'))))} >
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
                <Button fluid size="large" color="teal"  >
                    Login
                </Button>
            </Segment>
        </Form>
    )
}

export default connect()(reduxForm({form: 'loginForm'})(LoginForm))