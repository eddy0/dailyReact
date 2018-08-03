import React from 'react'

const {Provider, Consumer} = React.createContext()

const connect = (mapStateToProps) => {
    return (Component) => {
        
        class Receiver extends React.Component {
            
            componentDidMount() {
                let {subscribe} = this.props.store
                this.unsubscribe = subscribe(() => this.forceUpdate())
            }
            
            componentWillUnmount() {
                this.unsubscribe()
            }
            
            render() {
                let {dispatch, getState} = this.props.store
                let state = getState()
                let needState = {}
                if (typeof mapStateToProps === 'function') {
                    needState = mapStateToProps(state)
                }
                
                return <Component dispatch={dispatch} {...needState} />
            }
        }
        
        
        class ConnectComponent extends React.Component {
            render() {
                return (
                    <Consumer>
                        {
                            (store) => {
                                return <Receiver store={store} />
                            }
                        }
                    </Consumer>
                )
            }
        }
        
        
        return ConnectComponent
    }
}

export {
    Provider,
    Consumer,
    connect,
}