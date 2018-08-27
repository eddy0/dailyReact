import React, {Component} from 'react'
import {Loader, Dimmer} from 'semantic-ui-react'

class Loading extends Component {
    render() {
        return (
            <Dimmer inverted active={true}>
                <Loader active />
            </Dimmer>
            
        )
    }
}

export default Loading