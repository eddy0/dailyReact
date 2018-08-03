import React, { Component } from 'react';
import LoadingBar from './LoadingBar.js'
import {connect} from 'react-redux'
import handleInitalAction from './action'

class App extends Component {

    handleClick = () => {
        this.props.dispatch(handleInitalAction())
    }


  render() {
    return (
      <div className="App">
          <LoadingBar />

          <button onClick={this.handleClick} >show all todos</button>
          <ul ref={(list) => this.list = list}>
              { this.props.todo
                  ? Object.values(this.props.todo).map((data) => (
                      <li key={data.id}>{data.todo}</li>
                  ))
                  : null
              }
          </ul>
      </div>
    );
  }
}

const mapStateToProps = ({todo, loading}) => {
    return {
        todo,
        loading,
    }
}

export default connect(mapStateToProps)(App);
