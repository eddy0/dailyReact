import React, {Component} from 'react'
import {Menu, Button, Modal, Header} from 'semantic-ui-react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class LoginButton extends Component {
    state = { modalOpen: false }
    
    handleOpen = () => this.setState({ modalOpen: true })
    
    handleClose = () => this.setState({ modalOpen: false })
    
    render() {
        return (
            <Modal
                trigger={
                    <Button basic inverted content='Login' onClick={this.handleOpen} />
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='mini' centered  closeIcon
            >
                <Modal.Header icon='browser'>Login</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Modal.Actions>
                            <LoginForm  close={this.handleClose} />
                        </Modal.Actions>
                    </Modal.Description>
                </Modal.Content>
               
            </Modal>
        )
    }
}

class SingupButton extends Component {
    state = { modalOpen: false }
    
    handleOpen = () => this.setState({ modalOpen: true })
    
    handleClose = () => this.setState({ modalOpen: false })
    
    render() {
        return (
            <Modal
                trigger={
                    <Button basic inverted content='Sign Up'  onClick={this.handleOpen}  style={{marginLeft: '0.5rem'}}></Button>
                }
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='mini' centered  closeIcon
            >
                <Header icon='browser' content='Sign Up'/>
                <Modal.Content>
                    <Modal.Description>
                        <Modal.Actions>
                            <RegisterForm  close={this.handleClose} />
                        </Modal.Actions>
                    </Modal.Description>
                </Modal.Content>
            
            </Modal>
        )
    }
}


class SignUpMenu extends Component {
    render() {
        return (
            <Menu.Item position='right'>
                <LoginButton />
                <SingupButton />
            </Menu.Item>
        )
    }
}


export default SignUpMenu