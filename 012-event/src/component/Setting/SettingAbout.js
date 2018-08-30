import React, {Component} from 'react'
import {Button, Divider, Form, Header, Segment} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import TextInput from '../Form/TextInput'
import TextArea from '../Form/TextArea'

class SettingAbout extends Component {
    render() {
        return (
            <Segment>
                <Header dividing size="large" content="About Me" />
                <h4>Tell us about yourself</h4>
                <Field name="about" component={TextArea} placeholder="About Me" />
            </Segment>
        )
    }
}
export default reduxForm({form: 'userProfile', enableReinitialize:true, destroyOnUnmount: false} )(SettingAbout)
