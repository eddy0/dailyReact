import React, {Component} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Loading from './Loading'



class App extends Component {
    render() {
        const {events} = this.props
        if (events === null ) {
            return <Loading/>
        }

        return (
            <div>
                {JSON.stringify(events)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    let events = null
    let storeEvent = state.firestore.ordered.events
    if (storeEvent) {
        events = storeEvent
    }
    return {
        events: events
    }
}

export default compose(
    firestoreConnect([{collection: 'events'}]),
    connect(mapStateToProps),
)
(App)