import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Chart.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with D3</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chart/>
      </div>
    );
  }
}

export default App;
