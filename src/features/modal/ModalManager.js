import React, {Component} from 'react'
import {connect} from 'react-redux'
import TestModal from '../../app/layout/test'
import RegisterModal from './RegisterModal'
import LoginModal from './LoginModal'
import UnauthedModal from './UnauthedModal'



const modalMap = {
    TestModal,
    RegisterModal,
    LoginModal,
    UnauthedModal,
}


class ModalManager extends Component {
    render() {
        let RenderComponent
        let {currentModal} = this.props
        if (currentModal) {
            const {modalType, modalProps} = currentModal
            const ModalComponent = modalMap[modalType]
            RenderComponent = <ModalComponent {...modalProps} />
        }
        return (
            <span>
                {RenderComponent}
            </span>
        )
        
    }
}


const mapStateToProps = (state) => {
    return {
        currentModal: state.modal,
    }
}

export default connect(mapStateToProps)(ModalManager)