import React, {Component} from 'react'
import {Button, Menu} from 'semantic-ui-react'



class SignedOutMenu extends Component {
    render() {
        return (
            <Menu.Item position="right">
                <Button basic inverted content="Login" onClick={() => this.props.signIn()} />
                <Button basic inverted content="Sign Up" style={{marginLeft: '0.5em'}} />
            </Menu.Item>
        )
    }
}


export default SignedOutMenu