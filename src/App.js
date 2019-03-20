import React, { Component } from 'react';
import FrontEndCheckList from './components/FrontEndCheckList';
import Accordion from './components/Accordion';
import data from './components/data';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion data={{
          items: [
            {
              heading: {
                tag: 'h6',
                text: '<p>Some text</p>',
              }
            }
          ]
        }}/>
        <hr />
        <FrontEndCheckList data={data} />
      </div>
    );
  }
}

export default App;
