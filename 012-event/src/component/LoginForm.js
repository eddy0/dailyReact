import React, {Component} from 'react'
import {Button, Checkbox, Form} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {handleLogin} from '../action/user'



class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }
    
    handleInputChange = (e) => {
        let {name, value} = e.target
        this.setState(() => ({
                [name]: value,
            }))
    }
    
    handleClick = () => {
        console.log('this.state', this.state)
        this.props.dispatch(handleLogin(this.state, () => {
            this.props.history.push('/')
            this.props.close()
        }))
      
    }
    
    render() {
        let {username, password} = this.state
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
                <Button type='submit' color='teal' size='medium' onClick={this.handleClick}>Login</Button>
            </Form>
        )
    }
}


export default withRouter(connect()(LoginForm))