import React from 'react'
import Logo from '../assets/images/logo.png'
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'
import SignedInMenu from './SignedInMenu'
import SignUpMenu from './SignUpMenu'
import Modal from './Modal'
import {connect} from 'react-redux'



class NavBar extends React.Component {
    
    render() {
        let {auth} =  this.props
        return (
            <Menu inverted fixed='top' style={{background: 'linear-gradient(110deg, lightblue 60%, darkseagreen)'}}>
                <Container>
                        <Menu.Item as={Link} to='/'>
                                <img src={Logo} alt="Logo" />
                        </Menu.Item>
                   
                        <Menu.Item as={NavLink} to='/' name='events'></Menu.Item>
                    {auth !== null
                        ? <Menu.Item as={NavLink} to='/people' name='people'></Menu.Item>
                        : null
                    }
                    {auth !== null
                        ?
                        <Menu.Item>
                            <Link to='/event/new'>
                                <Button inverted positive float='right' content='create a event'></Button>
                            </Link>
                        </Menu.Item>
                        : null
                    }
                    {
                        auth !== null
                            ? <SignedInMenu />
                            : <SignUpMenu />
                    }
                    
                </Container>
            </Menu>
        
        )
    }
}

const mapStateToProps = ({auth}) => {
        return {
            auth,
        }
}

export default connect(mapStateToProps)(NavBar)