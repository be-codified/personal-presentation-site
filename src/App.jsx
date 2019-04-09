import React, { Component } from 'react';
import Highlight from 'react-highlight.js';
import shortid from 'shortid';
import CheckList from './components/check-list/CheckList';
// import Accordion from './components/accordion/Accordion';
// import AccordionItem from './components/accordion/AccordionItem';
// import AccordionItemHeading from './components/accordion/AccordionItemHeading';
// import AccordionItemContent from './components/accordion/AccordionItemContent';
import checkListData from './components/check-list/check-list-data';

class App extends Component {
  someFunction = () => {
    // TODO: something
  }

  render() {
    return (
      <div className="space-padding-large">
        <div className="how-was-made space-padding-large">
          <Highlight language="scss">
            <p>test</p>
          </Highlight>
        </div>

        {/*

        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <h6>I am a heading 1</h6>
            </AccordionItemHeading>
            <AccordionItemContent isCollapsed="false">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit 1</p>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <h6>I am a heading 2</h6>
            </AccordionItemHeading>
            <AccordionItemContent>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit 2</p>
            </AccordionItemContent>
          </AccordionItem>
        </Accordion>
        <hr />
        */}

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
