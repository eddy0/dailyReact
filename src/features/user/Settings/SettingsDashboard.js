import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import SettingsNav from './SettingsNav'
import {Route, Switch, Redirect} from 'react-router-dom'
import BasicPage from './BasicPage'
import AboutPage from './AboutPage'
import PhotosPage from './PhotosPage'
import AccountPage from './AccountPage'
import {updatePassword} from '../../../app/redux/actions/auth'
import {connect} from 'react-redux'



class SettingsDashboard extends Component {
    render() {
        const {updatePassword, providerId} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Switch>
                        <Redirect exact from='/settings' to='/settings/basic' />
                        <Route path='/settings/basic' render={
                            () => <BasicPage  />}
                        />
                        <Route path='/settings/about' render={() => <AboutPage />} />
                        <Route path='/settings/photos' render={() => <PhotosPage />} />
                        <Route path='/settings/account' render={() => <AccountPage providerId={providerId} updatePassword={updatePassword} />} />
                    </Switch>
                
                </Grid.Column>
                <Grid.Column width={6}>
                    <SettingsNav />
                </Grid.Column>
            </Grid>
        )
    }
}


const actions = {
    updatePassword,
}
const mapStateToProps = (state) => {
    const providerId = state.firebase.auth.providerData[0].providerId
    // console.log('providerId', providerId)
    
    return {
        providerId,
    }
}
export default connect(mapStateToProps, actions)(SettingsDashboard)