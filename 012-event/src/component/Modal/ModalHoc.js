import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'



const mapper = {
    login: LoginModal,
    register: RegisterModal
}


class ModalHoc extends Component {
    render() {
        if (this.props.modal !== null) {
            let {modalType, modalProps} = this.props.modal
            const Component = mapper[modalType]
            if (Component !== undefined) {
                return <Component {...modalProps}/>
            }
        }
        return <div/>
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal
    }
}

export default connect(mapStateToProps)(ModalHoc)