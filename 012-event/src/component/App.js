import React, {Component, Fragment} from 'react'
import {Container} from 'semantic-ui-react'
import Loading from './Layout/Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import Dashboard from './Layout/Dashboard'
import Home from './Layout/Home'
import ModalHoc from './Modal/ModalHoc'
import EventDetail from './Layout/EventDetail'
import EventForm from './Form/EventForm'




class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <ModalHoc />
                    <Loading />
                    <Navbar />
                    <Container style={{marginTop: 100}}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/events" component={Dashboard} />
                            <Route path="/event/:id" component={EventDetail} />
                            <Route path="/test" component={EventForm} />
                        </Switch>
                    </Container>
                </Fragment>
            </Router>
        )

    }
}


export default (App)