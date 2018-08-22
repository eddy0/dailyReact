import React, {Component, Fragment} from 'react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
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



class App extends Component {
    
  
    
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                
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
                                closeOnToastrClick/>
                            
                            <NavBar />
                            <Container className='main'>
                                <ModalManager/>
                                <Switch>
                                    <Route path='/events' component={EventDashboard} />
                                    <Route path='/event/new' component={EventForm} />
                                    <Route path='/event/:id' component={EventDetailedPage} />
                                    <Route path='/manage/:id' component={EventForm} />
                                    <Route exact path='/people' component={PeopleDashboard} />
                                    <Route path='/people/:id' component={PeopleDashboard} />
                                    <Route path='/settings' component={SettingsDashboard} />
                                    <Route path='/test' component={Test} />
                                </Switch>
                            </Container>
                        </Fragment>
                    )} />
                </Switch>
            
            </Router>
        )
    }
}

export default connect()(App)


// export default connect()(
//     firestoreConnect([{collection: 'events'}])(App)
// )
