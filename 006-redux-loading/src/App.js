import React, { Component } from 'react';
import {LoadingBar} from './LoadingBar.js'
import {connect} from 'react-redux'
import handleInitalAction from './action'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitalAction())
    }


  render() {
    console.log('props', this.props)
    return (

      <div className="App">
          <LoadingBar />
          
          <button >button</button>
          {JSON.stringify(this.props.data)}
      </div>
    );
  }
}

const mapStateToProps = ({data, loading}) => {
    return {
        data,
        loading,
    }
}

export default connect(mapStateToProps)(App);
