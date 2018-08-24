import React, {Component, Fragment} from 'react'
import NavBar from '../../nav/NavBar/NavBar'
import {Container} from 'semantic-ui-react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard'
import EventForm from '../../features/event/EventForm/EventForm'
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailed'
import ModalManager from '../../features/modal/ModalManager'
import Test from './test'
import {connect} from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import {firestoreConnect} from 'react-redux-firebase'
import ScrollToTop from './ScrollToTop'
import {userIsAuthenticated} from '../../features/auth/authWrapper'
import Loadable from 'react-loadable'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import Loading from './Loading'

const LoadableEventDashboard = Loadable({
    loader: () => import('../../features/event/EventDashboard/EventDashboard'),
    loading: Loading,
});

const LoadableEventDetailedPage = Loadable({
    loader: () => import('../../features/event/EventDetailed/EventDetailed'),
    loading: Loading,
});


class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Switch>
                        
                        <Route exact path='/' component={Home} />
                        
                        <Route render={() => (
                            <Fragment>
                                
                                <ReduxToastr
                                    timeOut={4000}
                                    newestOnTop={false}
                                    preventDuplicates
                                    position="bottom-right"
                                    transitionIn="fadeIn"
                                    transitionOut="fadeOut"
                                    progressBar
                                    closeOnToastrClick />
                                
                                <NavBar />
                                <Container className='main'>
                                    <ModalManager />
                                    <Switch>
                                        <Route path='/events' component={LoadableEventDashboard} />
                                        <Route path='/event/new' component={userIsAuthenticated(EventForm)} />
                                        <Route path='/event/:id' component={userIsAuthenticated(LoadableEventDetailedPage)} />
                                        <Route path='/manage/:id' component={userIsAuthenticated(EventForm)} />
                                        <Route exact path='/people' component={userIsAuthenticated(PeopleDashboard)} />
                                        <Route path='/people/:id' component={userIsAuthenticated(PeopleDashboard)} />
                                        <Route path='/settings' component={userIsAuthenticated(SettingsDashboard)} />
                                        <Route path='/test' component={Test} />
                                    </Switch>
                                </Container>
                            </Fragment>
                        )} />
                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}


export default connect()(App)

// export default connect()(
//     firestoreConnect([{collection: 'events'}])(App)
// )
