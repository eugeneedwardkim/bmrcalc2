import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

class App extends Component {
  render() {
    constructor (props) {
      super(props);
      this.state = {};
    }
    getBmr = (bmr) => {
      this.setState({bmr});
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>How Will You React When You Figure Out Your BMR?!</h2>
        </div>
        <p className="App-intro">
          Let's get your BMR calculated friendo!
          <Form addBmr={getBmr} />
          <Result bmr={this.state.bmr}/>
        </p>
      </div>
    );
  }
}

export default App;
