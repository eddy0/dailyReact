import React, {Component, Fragment} from 'react'
import {Button, Menu, Container} from 'semantic-ui-react'
import {NavLink, Link, withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menu/SignedOutMenu'
import SignedInMenu from '../Menu/SignedInMenu'
import {connect} from 'react-redux'
import {openModal} from '../../app/redux/actions/modal'
import {actionLogout} from '../../app/redux/actions/auth'
import {withFirebase} from 'react-redux-firebase'



class NavBar extends Component {
   
    handleSignIn = () => {
        this.props.dispatch(openModal('LoginModal'))
    }
    
    handleSignUp = () => {
        this.props.dispatch(openModal('RegisterModal'))
    }
    
    handleSignOut = () => {
        this.props.firebase.logout()
        this.props.history.push('/')
    }
    
    render() {
        const {auth} = this.props
        let authenticated = auth.isLoaded && !auth.isEmpty
    
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
                            ? <SignedInMenu auth={auth} signOut={this.handleSignOut} />
                            : <SignedOutMenu signUp={this.handleSignUp} signIn={this.handleSignIn} />
                    }
                
                </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default withRouter(withFirebase(connect(mapStateToProps)(NavBar)))