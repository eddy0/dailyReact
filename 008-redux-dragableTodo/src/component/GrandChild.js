import React from 'react'
import {Consumer} from './reduxLibrary'


class GrandChild extends React.Component {
   
    render() {
        return (
            <Consumer>
                {
                    (name) => {
                        return (
                            <div>
                                {name}
                            </div>
                        )
                    }
                }
            </Consumer>
        
        )
    }
}


export default GrandChild