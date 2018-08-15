import React, {Component} from 'react'
import {Menu, Image, Dropdown} from 'semantic-ui-react'
import avatar from '../assets/images/user.png'
import {Link} from 'react-router-dom'



class SignedInMenu extends Component {
    render() {
        return (
            <Menu.Item position='right'>
                <Image avatar spaced='right' src={avatar} />
                <Dropdown text='Username'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Create Event'  icon='plus'/>
                        <Dropdown.Item text='My Events'  icon='calendar'/>
                        <Dropdown.Item text='Network'  icon='users' />
                        <Dropdown.Item text='Profile'  icon='user' />
                        <Dropdown.Item as={Link} to='/setting' text='Settings' icon='settings' />
                        <Dropdown.Item text='Sign Out' icon='power' onClick={() => this.props.signOut()} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        )
    }
}


export default SignedInMenu