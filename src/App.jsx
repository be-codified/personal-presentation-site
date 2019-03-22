import React, { Component } from 'react';
import CheckList from './components/check-list/CheckList';
import Accordion from './components/Accordion';
import checkListData from './components/check-list/check-list-data';

import './App.css';
import ForEach from './components/ForEach';

class App extends Component {
  someFunction = () => {
    // TODO: something
  }

  render() {
    return (
      <div className="App">
        <ul>
          <ForEach items={['value 1', 'value 2']}>
            <li />
          </ForEach>
        </ul>

        <Accordion>
          <accordion-item>
            <h6>I am a heading 1</h6>
            <div>
              <h2>I am content 1</h2>
            </div>
          </accordion-item>
          <accordion-item>
            <h6>I am a heading 2</h6>
            <div>
              <strong>I am content 2</strong>
            </div>
          </accordion-item>
        </Accordion>
        <hr />
        <CheckList data={checkListData} />
      </div>
    );
  }
}

export default App;
