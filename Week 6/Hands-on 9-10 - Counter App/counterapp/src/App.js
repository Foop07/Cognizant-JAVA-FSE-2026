import React, { Component } from 'react';
import CountPeople from './CountPeople';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Mall Entry/Exit Counter</h1>
        <CountPeople />
      </div>
    );
  }
}

export default App;
