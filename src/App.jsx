import React, { Component } from 'react';
import CheckList from './components/check-list/CheckList';
import Accordion from './components/accordion/Accordion';
import AccordionItem from './components/accordion/AccordionItem';
import AccordionItemHeading from './components/accordion/AccordionItemHeading';
import AccordionItemContent from './components/accordion/AccordionItemContent';
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
          <AccordionItem>
            <AccordionItemHeading>
              <h6>I am a heading 1</h6>
            </AccordionItemHeading>
            <AccordionItemContent isCollapsed="false">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam impedit veniam porro dolor mollitia sunt itaque blanditiis officiis amet perspiciatis voluptatem id consequatur, placeat, recusandae vero vel aspernatur doloremque. 1</p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <h6>I am a heading 2</h6>
            </AccordionItemHeading>
            <AccordionItemContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quisquam impedit veniam porro dolor mollitia sunt itaque blanditiis officiis amet perspiciatis voluptatem id consequatur, placeat, recusandae vero vel aspernatur doloremque. 2</p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
        <hr />

        {/* --- Section check list --- */}
        <div>
          {/* Sidebar */}
          <ul>
            {
              checkListData.map(item => (
                <li>
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
