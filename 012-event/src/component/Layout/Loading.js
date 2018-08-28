import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

class Loading extends Component {
    render() {
        return (
            <Dimmer inverted active={this.props.active || false}>
                <Loader active />
            </Dimmer>
            
        )
    }
}

export default Loading