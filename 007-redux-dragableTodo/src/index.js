import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './component/App'
import middleware from './middleware'
import {createStore, compose} from 'redux'
import reducer from './reducer'
import {Provider} from './component/reduxLibrary'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancers(middleware))

ReactDOM.render(
    <Provider value={store}>
        <App />
    </Provider>,
    document.getElementById('root'))
