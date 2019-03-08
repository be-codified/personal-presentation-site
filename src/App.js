import React, { Component } from 'react';
import FrontEndCheckList from './components/FrontEndCheckList';
import data from './components/data';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontEndCheckList data={ data } />
      </div>
    );
  }
}

export default App;
