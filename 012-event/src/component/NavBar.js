import React from 'react'
import Logo from '../assets/images/logo.png'
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'
import SignedInMenu from './SignedInMenu'
import SignUpMenu from './SignUpMenu'



class NavBar extends React.Component {
    state = {
        authed: true,
    }
    handleSignIn = () => {
        this.setState({
            authed: true,
        })
    }
    
    handleSignOut = () => {
        this.setState({
            authed: false,
        })
    }
    
    render() {
        let {authed} =  this.state
        return (
            <Menu inverted fixed='top' style={{background: 'linear-gradient(110deg, lightblue 60%, darkseagreen)'}}>
                <Container>
                        <Menu.Item as={Link} to='/'>
                                <img src={Logo} alt="Logo" />
                        </Menu.Item>
                   
                        <Menu.Item as={NavLink} to='/' name='events'></Menu.Item>
                    {authed
                        ? <Menu.Item as={NavLink} to='/people' name='people'></Menu.Item>
                        : null
                    }
                    {authed
                        ?
                        <Menu.Item>
                            <Link to='/event/new'>
                                <Button inverted positive float='right' content='create a event'></Button>
                            </Link>
                        </Menu.Item>
                        : null
                    }
                    {
                        this.state.authed
                            ? <SignedInMenu signOut={this.handleSignOut} />
                            : <SignUpMenu signIn={this.handleSignIn} />
                    }
                    
                </Container>
            </Menu>
        
        )
    }
}


export default NavBar