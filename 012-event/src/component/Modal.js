import React from 'react'
import {Button, Header, Image, Menu, Modal} from 'semantic-ui-react'
import LoginForm from './LoginForm'

const ModalModalExample = () => (
    <Modal size='mini' centered  closeIcon  closeOnDimmerClick
        trigger={
            <Button basic inverted content='login' />
        }
    >
        <Modal.Header>Login</Modal.Header>
        <Modal.Content >
            <Modal.Description>
                <LoginForm/>
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default ModalModalExample