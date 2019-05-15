/* eslint-disable max-len */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import Link from '../../link/Link';

const classNames = new BEMHelper('knowledge');

const dataProgramming = (
  <ul>
    <li><span {...classNames('highlight')}>object-oriented programming</span>,</li>
    <li>architectural pattern <span {...classNames('highlight')}>MVC</span>, writing <span {...classNames('highlight')}>modular code</span>,</li>
    <li><span {...classNames('highlight')}>front-end development</span> (90% of time):
      <ul>
        <li>vanilla <span {...classNames('highlight')}>JavaScript &mdash; ECMAScript6</span> (e.g. classes, block scoped variables, template literals, arrow functions, destructuring assignments, promises, spread syntax, callbacks),</li>
        <li>frameworks or libraries <span {...classNames('highlight')}><Link href="https://reactjs.org/" title="Link to React" isOuter>React</Link></span> or <span {...classNames('highlight')}><Link href="https://vuejs.org/" title="Link to Vue.js" isOuter>Vue.js</Link></span> (e.g components, props, state, lifecycle) and</li>
        <li>JavaScript template engine <span {...classNames('highlight')}><Link href="https://mozilla.github.io/nunjucks/" title="Link to Nunjucks" isOuter>Nunjucks</Link></span> (e.g. extends, macros, conditions, filters),</li>
      </ul>
    </li>
    <li><span {...classNames('highlight')}>back-end development</span> (10% of time):
      <ul>
        <li>JavaScript runtime environment <span {...classNames('highlight')}><Link href="https://nodejs.org/en/" title="Link to Node.js" isOuter>Node.js</Link></span>, framework <span {...classNames('highlight')}><Link href="https://expressjs.com/" title="Link to Express" isOuter>Express</Link></span> and document database <span {...classNames('highlight')}><Link href="https://www.mongodb.com/" title="Link to MongoDB" isOuter>MongoDB</Link></span> and</li>
      </ul>
    </li>
    <li>communicating with <span {...classNames('highlight')}>REST APIs</span>, handling <span {...classNames('highlight')}>JSONs</span> and</li>
    <li>basic <span {...classNames('highlight')}>unit tests</span> with tool <Link href="https://mochajs.org/" title="Link to Mocha" isOuter>Mocha</Link>.</li>
  </ul>
);

export default dataProgramming;
