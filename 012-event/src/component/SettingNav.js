import React, {Component, Fragment} from 'react'
import {Menu, Icon, Header} from 'semantic-ui-react'
import {Link, withRouter} from 'react-router-dom'



class SettingNav extends Component {
    render() {
        let {match} = this.props
        return (
            <Fragment>
                <Menu pointing vertical>
                    <Header attached inverted color='grey'>
                        <Icon name='user' />
                        Profile
                    </Header>
                    <Menu.Item as={Link} to={`${match.url}/basic`}  name='Basic' />
                    <Menu.Item as={Link} to={`${match.url}/about`}  name='About Me' />
                    <Menu.Item as={Link} to={`${match.url}/photo`}  name='My Photo' />
                </Menu>
                <Menu pointing vertical>
                    <Header attached inverted color='grey'>
                        <Icon name='settings' />
                        Account
                    </Header>
                    <Menu.Item as={Link}  to={`${match.url}/account`}  name='account' />
                
                </Menu>
            </Fragment>
        )
    }
}


export default SettingNav