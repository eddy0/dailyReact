import React, {Component, Fragment} from 'react'
import {Button, Menu, Container} from 'semantic-ui-react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menu/SignedOutMenu'
import SignedInMenu from '../Menu/SignedInMenu'
import {connect} from 'react-redux'
import {openModal} from '../../app/redux/actions/modal'
import {actionLogout} from '../../app/redux/actions/auth'



class NavBar extends Component {
   
    handleSignIn = () => {
        this.props.dispatch(openModal('LoginModal'))
    }
    
    handleSignUp = () => {
        this.props.dispatch(openModal('RegisterModal'))
    }
    
    handleSignOut = () => {
        this.props.dispatch(actionLogout())
        this.props.history.push('/')
    }
    
    render() {
        const {auth} = this.props
        let {authenticated} = auth
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
                            <Menu.Item as={Link} to='/people' name="People" />
                            <Menu.Item>
                                <Button as={Link} to='/event/new' floated="right" positive inverted content="Create Event" />
                            </Menu.Item>
                        </Fragment>
                    }
                    {
                        authenticated
                            ? <SignedInMenu signOut={this.handleSignOut} />
                            : <SignedOutMenu signUp={this.handleSignUp} signIn={this.handleSignIn} />
                    }
                
                </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))