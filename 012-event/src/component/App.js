import React, {Component} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Loading from './Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Dashboard from './Dashboard'


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Navbar/>
                <Switch>
                    <Route exact path='/events' component={Dashboard} />
                </Switch>
                </Fragment>
            </Router>
        )

    }
}



export default compose(
    firestoreConnect([{collection: 'events'}]),
    connect(mapStateToProps),
)
(App)