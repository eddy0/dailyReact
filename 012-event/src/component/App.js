import React, {Component, Fragment} from 'react'
import {firestoreConnect} from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Loading from './Layout/Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Dashboard from './Layout/Dashboard'
import Home from './Layout/Home'
import LoginForm from './Form/LoginForm'
import ModalHoc from './Modal/ModalHoc'
import EventDetail from './Layout/EventDetail'


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <ModalHoc/>
                    <Loading/>
                    <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route  path='/events' component={Dashboard} />
                    <Route  path='/event/:id' component={EventDetail} />
                    <Route  path='/test' component={EventDetail} />
                </Switch>
                </Fragment>
            </Router>
        )

    }
}



export default (App)