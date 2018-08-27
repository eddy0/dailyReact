import React, {Component} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'



class App extends Component {
    render() {
        return (
            <div>
                hellow world
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let events = null
    return {
        events: events
    }
}

export default compose(
    firestoreConnect([{collection: 'events'}]),
    connect(mapStateToProps),
)
(App)