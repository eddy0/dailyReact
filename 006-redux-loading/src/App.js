import React, { Component } from 'react';
import {LoadingBar} from './LoadingBar.js'
import {connect} from 'react-redux'
import handleInitalAction from './action'

class App extends Component {
    
    handleClick = () => {
        this.list.innerHTML = ''
        this.props.dispatch(handleInitalAction())
    }


  render() {
        console.log(this.props.data)
    return (
      <div className="App">
          <LoadingBar />
          
          <button onClick={this.handleClick} >button</button>
          {JSON.stringify(this.props.data)}
          <ul ref={(list) => this.list = list}>
              {this.props.data
                  ? this.props.data.map((data) => (
                      <li key={data.todo}>{data.todo}</li>
                  ))
                  : null
              }
              </ul>
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
