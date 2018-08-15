import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import SettingNav from './SettingNav'



class Setting extends Component {
    render() {
    
        return (
            <Grid >
                <Grid.Column width={12}>
                    <h1>Settings</h1>
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingNav match = {this.props.match} />
                </Grid.Column>
            </Grid>
        )
    }
}


export default Setting