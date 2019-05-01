import React from 'react';
import Highlight from 'react-highlight.js';
import Tech from '../Tech';

const section = 'tech-comp-scroll-to-anchor';

const techCompScrollToAnchor = (
  <Tech
    navigation={
      {
        section,
        items: [
          {
            id: `${section}-component-methods`,
            text: 'Component methods',
            items: [
              {
                id: `${section}-component-methods-constructor`,
                text: 'Method constructor()',
              },
              {
                id: `${section}-component-methods-render`,
                text: 'Method render()',
              },
              {
                id: `${section}-component-methods-handle-click`,
                text: 'Method handleClick()',
              },
            ],
          },
          {
            id: `${section}-test-2`,
            text: 'test 2',
            items: [],
          },
        ],
      }
    }
  >
    <h2>React component: Scroll to anchor</h2>
    <p>What does it do?</p>
    <p>Short description</p>
    <h3>Component methods</h3>

    <h4 id={`${section}-component-methods-constructor`}>Method constructor()</h4>
    <p>Short description</p>
    <Highlight language="javascriptreact">
      <p>Method constructor()</p>
    </Highlight>

    <h4 id={`${section}-component-methods-render`}>Method render()</h4>
    <p>Short description</p>
    <Highlight language="javascriptreact">
      <p>Method render()</p>
    </Highlight>

    <h4 id={`${section}-component-methods-handle-click`}>Method handleClick()</h4>
    <p>Short description</p>
    <Highlight language="javascriptreact">
      <p>Method handleClick()</p>
    </Highlight>
  </Tech>
);

export default techCompScrollToAnchor;
