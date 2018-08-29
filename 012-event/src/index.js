import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import './index.css'
import 'semantic-ui-css/semantic.min.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import middleware from './middleware'
import 'antd/dist/antd.css';
const store = createStore(reducer, middleware)


const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        , document.getElementById('app'))
}

if (module.hot) {
    module.hot.accept('./component/App', () => {
        setTimeout(render)
    })
    
    module.hot.accept('./reducer', () => {
        const newReducer = require('./reducer').default
        console.log('newReducer', newReducer)
        store.replaceReducer(newReducer)
    })
}


render()