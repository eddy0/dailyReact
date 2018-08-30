import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'




class SettingsDashboard extends Component {
    render() {
        const {updatePassword, providerId, user, updateProfile} = this.props
        return (
            <Grid>
                <Grid.Column width={10}>
                    setting

                </Grid.Column>
                <Grid.Column width={6}>
                    navbar
                </Grid.Column>
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
export default connect(mapStateToProps, actions)(SettingsDashboard)