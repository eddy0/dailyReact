import React, {Component, Fragment} from 'react'
import {Button, Container} from 'semantic-ui-react'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EventForm from './EventForm'
import HomePage from './HomePage'
import Setting from './Setting'
import DetailPage from './DetailPage'
import {handleInitialEvents} from '../action/share'
import LoadingBar from 'react-redux-loading-bar'
import {connect} from 'react-redux'
import GoogleMap from './GoogleMap'


class App extends Component {
    componentWillMount() {
        this.props.dispatch(handleInitialEvents())
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/google" component={GoogleMap} />
                    <Route render={() => (
                        <Fragment>
                            <NavBar />
                            <Container className="main">
                                <Route exact path="/event" component={Dashboard} />
                                <Route path="/event/new" component={EventForm} />
                                <Route exact path="/event/:id" component={DetailPage} />
                                <Route path="/manage/:id/" component={EventForm} />
                                <Route path="/people" component={EventForm} />
                                <Route path="/people/:id/profile" component={EventForm} />
                                <Route path="/setting" component={Setting} />
                            </Container>
                        </Fragment>
                    )}
                    />

                </Switch>
            </Router>
        )
    }
}



export default connect()(App)
