import React, {Component} from 'react'
import { Menu, Dropdown, Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



class SignedInMenu extends Component {
    render() {
        return (
            <Menu.Item position="right">
                <Image avatar spaced="right" src='/assets/user.png' />
                <Dropdown pointing="top left" text="Username">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Create Event" icon="plus" />
                        <Dropdown.Item text="My Events" icon="calendar" />
                        <Dropdown.Item text="My Network" icon="users" />
                        <Dropdown.Item text="My Profile" icon="user" />
                        <Dropdown.Item text="Settings" as={Link} to='/settings' icon="settings" />
                        <Dropdown.Item text="Sign Out" icon="power" onClick={() => this.props.signOut()} />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        )
    }
}


export default SignedInMenu