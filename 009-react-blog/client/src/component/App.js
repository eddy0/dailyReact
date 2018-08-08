import React, {Fragment} from 'react'
import Header from './Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import NewBlog from './NewBlog'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Route exact path="/" component={Home} />
                    <Route path="/new" render={() => {
                        return (
                            <NewBlog text='ok' />
                        )
                    }}  />
                </Fragment>
            </Router>

        )
    }
}

export default App