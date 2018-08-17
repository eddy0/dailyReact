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



class App extends Component {
    render() {
        return (
            <Router onUpdate={() => window.scrollTo(0, 0)}>
                
                <Switch>
                    <Route exact path='/' component={Home} />
                    
                    <Route render={() => (
                        <Fragment>
                            <NavBar />
                            <Container className='main'>
                                <Switch>
                                    <Route path='/events' component={EventDashboard} />
                                    <Route path='/event/new' component={EventForm} />
                                    <Route path='/event/:id' component={EventDetailedPage} />
                                    <Route path='/manage/:id' component={EventForm} />
                                    <Route path='/people' component={PeopleDashboard} />
                                    <Route path='/people/:id' component={EventDashboard} />
                                    <Route path='/settings' component={SettingsDashboard} />
                                </Switch>
                            </Container>
                        </Fragment>
                    )} />
                </Switch>
            
            </Router>
        )
    }
}


export default App