import React, {Component} from 'react'
import {Modal, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {actionCloseModal} from '../../action/modal'
import LoginForm from '../Form/LoginForm'



const LoginModal = (props) => (
    <Modal
        size='tiny'
        open={true}
        onClose={props.actionCloseModal}
    >
        <Header textAlign='center'>
            Login to the Event
        </Header>
        <Modal.Content>
            <Modal.Description>
                <LoginForm />
            </Modal.Description>
        </Modal.Content>
    </Modal>
)

export default connect(null, {actionCloseModal})(LoginModal)