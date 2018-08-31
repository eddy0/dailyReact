import React, {Component} from 'react'
import {Form, Grid, Segment} from 'semantic-ui-react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import SettingNav from '../Setting/SettingNav'
import SettingBasic from '../Setting/SettingBasic'
import SettingAbout from '../Setting/SettingAbout'
import SettingPhoto from '../Setting/SettingPhoto'
import SettingAccount from '../Setting/SettingAccount'



class Setting extends Component {
    render() {
        // const {updatePassword, providerId, user, updateProfile} = this.props
        const {user, providerId} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Switch>
                        <Redirect exact from='/settings' to='/settings/basic' />
                        <Route path='/settings/basic'
                            render={
                                () => <SettingBasic initialValues={user} />}
                        />
                        <Route path='/settings/about' render={
                            () => <SettingAbout initialValues={user} />}
                        />
                        <Route path='/settings/avatar' render={
                            () => <SettingPhoto initialValues={user} />}
                        />
                        <Route path='/settings/account' render={
                            () => <SettingAccount providerId={providerId}  />}
                        />
                    </Switch>
                </Grid.Column>
                <SettingNav />
            </Grid>
        )
    }
}


const mapStateToProps = (state) => {
    const providerId = state.firebase.auth.providerData[0].providerId
    const user = state.firebase.profile
    // console.log('providerId', providerId)
    return {
        providerId,
        user,
    }
}

const actions = {}

export default connect(mapStateToProps)(Setting)