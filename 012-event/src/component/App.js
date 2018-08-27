import React, {Component, Fragment} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Loading from './Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Home from './Home'
import LoginForm from './Form/LoginForm'
import ModalHoc from './Modal/ModalHoc'


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <ModalHoc/>
                    <Navbar/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/events' component={Dashboard} />
                    <Route exact path='/test' component={LoginForm} />
                </Switch>
                </Fragment>
            </Router>
        )

    }
}



export default (App)