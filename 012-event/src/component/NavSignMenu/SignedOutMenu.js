import React from 'react'
import {Button, Menu} from 'semantic-ui-react'
import {actionOpenModal} from '../../action/modal'
import {connect} from 'react-redux'



const SignedOutMenu = (props) => {
    return (
        <Menu.Item position='right'>
            <Button onClick={() => props.dispatch(actionOpenModal('register'))} compact inverted >Sign up</Button>
            <Button onClick={() => props.dispatch(actionOpenModal('login'))} basic compact inverted style={{marginLeft: '0.5rem'}}>Sign in</Button>
        </Menu.Item>
    )
}


export default connect()(SignedOutMenu)
