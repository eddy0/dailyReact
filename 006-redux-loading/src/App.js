import React, { Component } from 'react';
import LoadingBar from './LoadingBar.js'
import {connect} from 'react-redux'
import handleInitalAction from './action'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitalAction())
    }

  render() {

    return (
      <div className="App">
          <button onClick={this.handleLoading}></button>
      </div>
    );
  }
}

export default connect()(App);
