import React, {Component, Fragment} from 'react'
import {Button, Container} from 'semantic-ui-react'
import Dashboard from './Dashboard'
import NavBar from './NavBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EventForm from './EventForm'
import HomePage from './HomePage'
import Setting from './Setting'
import DetailPage from './DetailPage'



class App extends Component {
    render() {
        return (
            <Router>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route render={() => (
                            <Fragment>
                                <NavBar/>
                                <Container className='main'>
                                    <Route exact path='/event' component={Dashboard} />
                                    <Route path='/event/new' component={EventForm}  />
                                    <Route path='/event/:id' component={DetailPage}  />
                                    <Route path='/people' component={EventForm}  />
                                    <Route path='/people/:id/profile' component={EventForm}  />
                                    <Route path='/setting' component={Setting}  />
                                </Container>
                            </Fragment>
                        )}
                    />
                    </Switch>
            </Router>
        )
    }
}


export default App
