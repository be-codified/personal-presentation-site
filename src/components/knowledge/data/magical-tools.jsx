/* eslint-disable max-len */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import Link from '../../link/Link';

const classNames = new BEMHelper('knowledge');

const knowledgeDataMagicalTools = (
  <ul>
    <li>
      Desktop and CLI tools:
      <ul>
        <li>code editor <span {...classNames('highlight')}><Link href="https://code.visualstudio.com/" title="Link to Visual Studio Code" isOuter>Visual Studio Code</Link>,</span></li>
        <li>CSS pre-processor <span {...classNames('highlight')}><Link href="https://sass-lang.com/" title="Link to SASS" isOuter>SASS</Link></span> and <span {...classNames('highlight')}>code linters</span> <Link href="https://eslint.org/" title="Link to ESLint" isOuter>ESLint</Link> for JavaScript and <Link href="https://stylelint.io/" title="Link to stylelint" isOuter>stylelint</Link> for SCSS,</li>
        <li>JavaScript compiler <span {...classNames('highlight')}><Link href="https://babeljs.io/" title="Link to Babel" isOuter>Babel</Link></span> and JavaScript task runner <span {...classNames('highlight')}><Link href="https://gulpjs.com/" title="Link to Gulp" isOuter>Gulp</Link></span> (e.g. server, watchers, live-reload, Nunjucks, SASS, source maps, HTML/CSS/JS minify and image optimization),</li>
        <li>package manager <span {...classNames('highlight')}><Link href="https://www.npmjs.com" title="Link to npm" isOuter>npm</Link></span> and module builder <span {...classNames('highlight')}><Link href="https://webpack.js.org/" title="Link to Webpack" isOuter>Webpack</Link>,</span></li>
      </ul>
    </li>
    <li>
      web based tools:
      <ul>
        <li><span {...classNames('highlight')}><Link href="https://github.com/" title="Link to GitHub" isOuter>GitHub</Link></span> (working with a team of developers, pull requests, code reviews and continuous integration),</li>
        <li>debugging tools <span {...classNames('highlight')}><Link href="https://developers.google.com/web/tools/chrome-devtools/" title="Link to Chrome DevTools" isOuter>Chrome DevTools</Link></span> built into browser Google Chrome,</li>
        <li>project management tool <span {...classNames('highlight')}><Link href="https://www.atlassian.com/software/jira" title="Link to Jira" isOuter>Jira</Link></span> (e.g. scrum boards, sprints, issues and tempo),</li>
        <li><span {...classNames('highlight')}>code validators</span> <Link href="https://travis-ci.com/" title="Link to Travis" isOuter>Travis</Link>, <Link href="https://validator.w3.org/" title="Link to W3C markup validation service" isOuter>W3C markup validation service</Link> and <Link href="https://wave.webaim.org/" title="Link to WAVE web accessibility tool" isOuter>WAVE web accessibility tool</Link>,</li>
        <li><span {...classNames('highlight')}>testing tools</span> <Link href="https://www.browserstack.com/" title="Link to Browserstack" isOuter>Browserstack</Link> for browsers and <Link href="https://litmus.com/" title="Link to Litmus" isOuter>Litmus</Link> for emails,</li>
        <li>solution for SVG icons sprite &mdash; generator <Link href="https://icomoon.io/" title="Link to IcoMoon" isOuter>IcoMoon</Link>,</li>
      </ul>
    </li>
    <li>all running on a small thing called <span {...classNames('highlight')}>Apple MacBook Pro 13-inch,</span> extended to 29-inch <span {...classNames('highlight')}>external screen</span> (ratio 21:9).</li>
  </ul>
);

export default knowledgeDataMagicalTools;
