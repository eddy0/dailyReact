import React, {Component} from 'react'
import {Dimmer, Loader} from 'semantic-ui-react'



class Loading extends Component {
    render() {
        return (
            <Dimmer inverted active={true}>
                <Loader content='Loading...' />
            </Dimmer>
        )
    }
}


export default Loading