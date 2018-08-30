import React, {Component} from 'react'
import {Form, Segment, Button, List, Message, Label, Divider, Header} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import TextInput from './TextInput'
import SocialLogin from './SocialLogin'
import {actionOpenModal} from '../../action/modal'
import {handleActionLogin} from '../../action/auth'


const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(com|net|cc|cn)$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    }
    return errors
}



class LoginForm extends Component {

    render() {
        const {error, submitting, pristine, invalid, handleSubmit} = this.props
        return (
            <Segment style={{boxShadow: '0 0.3rem 1rem rgba(0,0,0,0.3)'}}>
                <Form size="small" onSubmit={handleSubmit(handleActionLogin)} >
                    <Field
                        name="email"
                        type="text"
                        label="Email"
                        placeholder="email"
                        required={true}
                        component={TextInput}
                    />
                    <Field
                        required={true}
                        label="password"
                        name="password"
                        component={TextInput}
                        type="password"
                        placeholder="password"
                    />
                    <div style={{textAlign: 'center'}}>
                        <Button  size="large" color="teal" style={{marginRight: '1rem'}} disabled={invalid ||pristine || submitting }>
                            Login
                        </Button>
                        <Button  size="large" color="teal" onClick={() => this.props.dispatch(actionOpenModal('register'))} >
                            Sign up
                        </Button>
                    </div>
                    <Divider horizontal>
                        or
                    </Divider>
                    <SocialLogin />
                </Form>

            </Segment>

        )
    }
}

const actions = {
    actionOpenModal,
    handleActionLogin,
}

export default connect(null, actions)(reduxForm({form: 'loginForm', validate})(LoginForm))