import React from 'react'
import {Header, Modal} from 'semantic-ui-react'
import connect from 'react-redux/es/connect/connect'
import {actionCloseModal} from '../../action/modal'
import RegisterForm from '../Form/RegisterForm'


const RegisterModal = (props) => (
    <Modal
        size='tiny'
        open={true}
        onClose={props.actionCloseModal}
    >
        <Header textAlign='center'>
            Join to the Event
        </Header>
        <Modal.Content>
            <Modal.Description>
                <RegisterForm />
            </Modal.Description>
        </Modal.Content>
    </Modal>
)



export default connect(null, {actionCloseModal})(RegisterModal)