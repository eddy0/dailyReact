import React, {Component} from 'react'
import {Container, Image, Menu, Button} from 'semantic-ui-react'
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SignedInMenu from '../NavSignMenu/SignedInMenu'
import SignedOutMenu from '../NavSignMenu/SignedOutMenu'
import {compose} from 'redux'
import {withFirebase} from 'react-redux-firebase'



class Navbar extends Component {
    
    handleSignout = () => {
        this.props.firebase.logout()
        this.props.history.push('/events')
    }
    
    render() {
        const {auth} = this.props
        const authed = auth.isLoaded && auth.isEmpty === false
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
                    {
                        authed &&
                        <Menu.Item
                            as={NavLink}
                            to='/event/new'
                            name='Create Event'
                        />
                    }
                  
                    
                    {
                        authed
                            ? <SignedInMenu signOut={this.handleSignout} profile={this.props.profile} auth={auth} />
                            : <SignedOutMenu  />
                    }
                  
                </Container>
            </Menu>
        )
    }
}

const mapStateToProps = (state, props) => {
    const auth = state.firebase.auth
    const profile = state.firebase.profile
    
    return {
        auth: auth,
        profile: profile
    }
}

export default compose(
    withFirebase,
    connect(mapStateToProps),
    withRouter,
)(Navbar)