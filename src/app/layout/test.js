import React from 'react'
import {Modal} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {closeModal} from '../redux/actions/modal'



const TestModal = props => {
    return (
        <Modal closeIcon="close" open={true} onClose={() => props.dispatch(closeModal())} >
            <Modal.Header>Test Modal</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <p>Test Modal... nothing to see here</p>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    )
}


export default connect()(TestModal)