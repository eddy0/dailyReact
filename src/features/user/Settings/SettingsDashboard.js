import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import {Route, Switch, Redirect} from 'react-router-dom'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'



class SettingsDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Switch>
                        <Redirect exact from='/settings' to='/settings/basic' />
                        <Route path='/settings/basic' component={BasicPage}  />
                        <Route path='/settings/about' component={AboutPage} />
                        <Route path='/settings/photos' component={PhotosPage} />
                        <Route path='/settings/account' component={AccountPage} />
                    </Switch>
                
                </Grid.Column>
                <Grid.Column width={6}>
                    <SettingsNav />
                </Grid.Column>
            </Grid>
        )
    }
}


export default SettingsDashboard