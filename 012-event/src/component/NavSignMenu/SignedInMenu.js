import React, {Component} from 'react'
import {Menu, Dropdown, Image} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'



class SignedInMenu extends Component {
    
   
    
    trigger = (profile) => {
        
        return (
            (
                <span>
        <Image avatar spaced="right" src={ profile.photoURL || '/assets/user.png'} />
                    {profile.displayName}
        </span>
            )
        )
    }
    
    render() {
        const {profile, auth} = this.props
        return (
            <Menu.Item position="right">
                <Dropdown compact  pointing='top' icon={''} trigger={this.trigger(profile)}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="New Event" icon="plus"  as={Link} to='/event/new' />
                        <Dropdown.Item text="Network" icon="users" />
                        <Dropdown.Item text="Profile"  as={Link} to={`/people/${auth.uid}`} icon="user" />
                        <Dropdown.Item text="Settings" as={Link} to='/settings' icon="settings" />
                        <Dropdown.Item text="Sign Out" icon="power" onClick={() => this.props.signOut()} />
                    </Dropdown.Menu>
                </Dropdown>
            
            </Menu.Item>
        )
    }
}



export default SignedInMenu