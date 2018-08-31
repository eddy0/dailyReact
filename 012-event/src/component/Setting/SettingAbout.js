import React, {Component} from 'react'
import {Button, Divider, Form, Header, Segment} from 'semantic-ui-react'
import {Field, reduxForm} from 'redux-form'
import TextInput from '../Form/TextInput'
import TextArea from '../Form/TextArea'
import SelectInput from '../Form/SelectInput'



const interests = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
]


class SettingAbout extends Component {
    render() {
        const {pristine, submitting} = this.props
        return (
            <Segment>
                <Header dividing size="large" content="About Me" />
                <Form>
                    <h4>Tell us about yourself</h4>
                    <Field
                        row={3}
                        name="about"
                        component={TextArea}
                        placeholder="About Me"
                    />
                    <h4>Select your interests</h4>
                    <Field
                        name="interests"
                        component={SelectInput}
                        options={interests}
                        value="interests"
                        multiple={true}
                        placeholder="Select your interests"
                    />
                    <Button disabled={pristine || submitting} size='large' positive content='Update Profile' />
                </Form>
            </Segment>
        )
    }
}


export default reduxForm({form: 'userProfile', enableReinitialize: true, destroyOnUnmount: false})(SettingAbout)
