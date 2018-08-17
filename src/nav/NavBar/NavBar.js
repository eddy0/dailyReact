import React, {Component, Fragment} from 'react'
import {Button, Menu, Container} from 'semantic-ui-react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menu/SignedOutMenu'
import SignedInMenu from '../Menu/SignedInMenu'




class NavBar extends Component {
    state = {
        authenticated: true,
    }
    
    handleSignIn = () => {
        this.setState({
            authenticated: true,
        })
    }
    
    handleSignOut = () => {
        this.setState({
            authenticated: false,
        })
        this.props.history.push('/')
    }
    
    render() {
        const {authenticated} = this.state
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item as={Link} to='/'>
                        <img src="/assets/images/logo.png" alt="logo" />
                        Re-vents
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/events' name="Events" />
                    { authenticated &&
                        <Fragment>
                            <Menu.Item as={NavLink} to='/people' name="People" />
                            <Menu.Item>
                                <Button as={NavLink} to='/event/new' floated="right" positive inverted content="Create Event" />
                            </Menu.Item>
                        </Fragment>
                    }
                    {
                        authenticated
                            ? <SignedInMenu signOut={this.handleSignOut} />
                            : <SignedOutMenu signIn={this.handleSignIn} />
                    }
                
                </Container>
            </Menu>
        )
    }
}


export default withRouter(NavBar)