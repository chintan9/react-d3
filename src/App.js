import React from 'react';
import './App.css';
import Demo from './geoLoc.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="address"></h2>
        </div>
        <Demo/>
      </div>
    );
  }
}

export default App;
