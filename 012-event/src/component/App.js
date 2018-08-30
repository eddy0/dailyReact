import React, {Component, Fragment} from 'react'
import {Container} from 'semantic-ui-react'
import Loading from './Layout/Loading'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Layout/Navbar'
import EventDashboard from './Layout/EventDashboard'
import Home from './Layout/Home'
import ModalHoc from './Modal/ModalHoc'
import EventDetail from './Layout/EventDetail'
import EventForm from './Layout/EventForm'
import Setting from './Layout/Setting'




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
                            <Route path="/events" component={EventDashboard} />
                            <Route path="/event/:id" component={EventDetail} />
                            <Route path="/settings" component={Setting} />
                            <Route path="/test" component={EventForm} />
                        </Switch>
                    </Container>
                </Fragment>
            </Router>
        )

    }
}


export default (App)