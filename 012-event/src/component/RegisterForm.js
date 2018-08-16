import React, {Component} from 'react'
import {Button, Checkbox, Form, Modal} from 'semantic-ui-react'



const log = console.log.bind(console)


class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        _password: '',
    }
    
    handleInputChange = (e) => {
        let {name, value} = e.target
        this.setState(() => ({
            [name]: value,
        }))
    }
    
    handleClick = () => {
        log(this.state)
        this.props.close()
    }
    
    render() {
            let {username, password, _password} = this.state
        return (
            <Form>
                <Form.Field>
                    <label>Username</label>
                    <input name='username' onChange={this.handleInputChange} value={username} placeholder='username' />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' name='password' onChange={this.handleInputChange} value={password} placeholder='password' />
                </Form.Field>
                <Form.Field>
                    <label>Confirm Password</label>
                    <input type='password' name='_password' onChange={this.handleInputChange} value={_password} placeholder='password' />
                </Form.Field>
                <Button type='submit' color='teal' size='medium' onClick={this.handleClick}>Sign Up</Button>
            </Form>
        )
    }
}


export default RegisterForm