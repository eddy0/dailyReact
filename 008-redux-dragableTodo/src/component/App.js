import React, {Component} from 'react'
import ConnectTodo from './Todo'
import LoadingBar from './LoadingLibrary'
import Child from './Child'
import {Provider} from './reduxLibrary'



class App extends Component {
    render() {
        return (
            <div className="App">
                <LoadingBar />
                <Provider value={'Todo'}>
                    <Child/>
                </Provider>
               <ConnectTodo/>
            </div>
        )
    }
}


export default App
