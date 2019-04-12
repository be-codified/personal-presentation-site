import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import Highlight from 'react-highlight.js';
import shortid from 'shortid';
import CheckList from './components/check-list/CheckList';
import HowWasMade from './components/how-was-made/HowWasMade';
// import scrollToAnchor from './js/scroll-to-anchor';
// import Accordion from './components/accordion/Accordion';
// import AccordionItem from './components/accordion/AccordionItem';
// import AccordionItemHeading from './components/accordion/AccordionItemHeading';
// import AccordionItemContent from './components/accordion/AccordionItemContent';
import checkListData from './components/check-list/check-list-data';

class App extends Component {
  componentDidMount() {
    // scrollToAnchor();
  }

  render() {
    const section = 'some-section';

    const test = React.createRef();
    console.log(test);

    return (
      <div className="space-padding-large">
        <span ref={this.test}></span>

        {/* How was made */}

        {/* TODO: move in */}

        <HowWasMade sidebar={
          {
            section,
            items: [
              {
                id: 'test-1',
                heading: 'test 1',
              },
              {
                id: 'test-2',
                heading: 'test 2',
              },
            ],
          }
        }
        >
          <h2>How was made title</h2>
          <h3 id={`${section}-test-1`} ref={`${section}-test-1`}>How was made subtitle</h3>
          <h3 id={`${section}-test-2`} ref={`${section}-test-2`}>How was made subtitle</h3>
          <Highlight language="scss">
            <p>test</p>
          </Highlight>
        </HowWasMade>
        {/* / How was made */}
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
