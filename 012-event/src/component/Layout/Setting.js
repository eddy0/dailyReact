import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import SettingNav from '../Setting/SettingNav'
import SettingBasic from '../Setting/SettingBasic'
import SettingAbout from '../Setting/SettingAbout'




class Setting extends Component {
    render() {
        // const {updatePassword, providerId, user, updateProfile} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    <Switch>
                    <Redirect exact from='/settings' to='/settings/basic' />
                    <Route path='/settings/basic' component={SettingBasic} />
                    <Route path='/settings/about' component={SettingAbout} />

                    </Switch>
                </Grid.Column>
                    <SettingNav/>
            </Grid>
        )
    }
}




const mapStateToProps = (state) => {
    // const providerId = state.firebase.auth.providerData[0].providerId
    // const user = state.firebase.profile
    // console.log('providerId', providerId)
    return {
        // providerId,
        // user,

    }
}

const actions = {

}

export default Setting
// export default connect(mapStateToProps, actions)(SettingsDashboard)