import React, {Component} from 'react'
import {Menu, Button} from 'semantic-ui-react'




class SignUpMenu extends Component {
    render() {
        return (
            <Menu.Item position='right'>
                <Button basic inverted content='login' onClick={() => this.props.signIn()}  ></Button>
                <Button basic inverted content='sign out' style={{marginLeft: '0.5rem'}}></Button>
            </Menu.Item>
        )
    }
}


export default SignUpMenu