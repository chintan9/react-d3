import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './geoLoc.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 id="address">Welcome to React with D3</h2>
        </div>
        <Demo/>
      </div>
    );
  }
}

export default App;
