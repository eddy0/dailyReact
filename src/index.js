import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import App from './app/layout/App'
import {createStore, replaceReducer} from 'redux'
import {Provider} from 'react-redux'
import middleware from './app/redux/midleware'
import reducer from './app/redux/reducers'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'


const store = createStore(reducer, middleware)

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('root'))
}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })

    module.hot.accept('./app/redux/reducers', () => {
        const newReducer = require('./app/redux/reducers').default
        store.replaceReducer(newReducer)

    })
}

store.firebaseAuthIsReady.then(() => {
    render()
})

