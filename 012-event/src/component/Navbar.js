import React, {Component} from 'react'
import {Container, Image, Menu, Button} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionOpenModal} from '../action/modal'



class Navbar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted borderless style={{background: 'lightcoral', boxShadow: '0 0.5rem 1rem rgba(0,0,0,0.3)', borderRadius: 0}} >
                <Container>
                    <Menu.Item>
                        <Image src='/assets/logo.png' size='mini'/>
                    </Menu.Item>
                    <Menu.Item
                        as={NavLink}
                        to='/events'
                        name='Events'
                    />
                    <Menu.Item
                        as={NavLink}
                        to='/test'
                        name='Test'
                    />
                    <Menu.Item position='right'>
                        <Button onClick={() => this.props.dispatch(actionOpenModal('register'))} compact inverted >Sign up</Button>
                        <Button onClick={() => this.props.dispatch(actionOpenModal('login'))} basic compact inverted style={{marginLeft: '0.5rem'}}>Sign in</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}

export default connect()(Navbar)