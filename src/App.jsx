import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Highlight from 'react-highlight.js';
import shortid from 'shortid';
import CheckList from './components/check-list/CheckList';
import Tech from './components/tech/Tech';
import checkListData from './components/check-list/check-list-data';

class App extends Component {
  someMethod = () => {}

  render() {
    const section = 'some-section';

    return (
      <div className="space-padding-large">
        {/* Tech */}
        {/* TODO: move in config */}

        <Tech
          sidebar={
            {
              section,
              items: [
                {
                  id: `${section}-test-1`,
                  text: 'test 1',
                },
                {
                  id: `${section}-test-2`,
                  text: 'test 2',
                },
              ],
            }
          }
        >
          <h2>How was made title</h2>
          <h3 id={`${section}-test-1`}>How was made subtitle 1</h3>
          <h3 id={`${section}-test-2`}>How was made subtitle 2</h3>
          <Highlight language="scss">
            <p>test</p>
          </Highlight>
        </Tech>
        {/* / Tech */}

        {/* --- Section check list --- */}
        <div>
          {/* Sidebar */}
          <ul className="list-no-style-type">
            {
              checkListData.map(item => (
                <li key={shortid.generate()}>
                  <a href={`#${item.id}`} title={item.heading}>{item.heading}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <CheckList data={checkListData} />
        {/* /--- Section check list --- */}
      </div>
    );
  }
}

export default App;
