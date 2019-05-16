/* eslint-disable max-len */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import Link from '../../link/Link';

const classNames = new BEMHelper('knowledge');

const knowledgeDataVisualOutput = (
  <ul>
    <li>markup language <span {...classNames('highlight')}>HTML5</span> (using modern semantic markup e.g. <span {...classNames('code')}>{['<main>']}</span><span {...classNames('code')}>{['<header>']}</span><span {...classNames('code')}>{['<nav>']}</span><span {...classNames('code')}>{['<article>']}</span> and <span {...classNames('code')}>{['<picture>']}</span>),</li>
    <li>cascading style sheets language <span {...classNames('highlight')}>CSS3</span> within large scale projects:
      <ul>
        <li>using <span {...classNames('highlight')}>modern properties</span>, writing highly <span {...classNames('highlight')}>isolated, reusable, scalable and maintainable code</span> &mdash; no duplicated properties,</li>
        <li><span {...classNames('highlight')}>responsive web design</span> based on media queries (mobile first principle),</li>
        <li>building <span {...classNames('highlight')}>grid layout</span> with Flexbox or Grid properties, <span {...classNames('highlight')}>web font embedding</span>, achieving  <span {...classNames('highlight')}>transitions and animations</span> and</li>
        <li><span {...classNames('highlight')}>BEM methodology</span> (writing classes e.g. <span {...classNames('code')}>tree__leaf--brown</span>),</li>
      </ul>
    </li>
    <li>CSS extension language <span {...classNames('highlight')}>SASS</span> (using nested properties, imports and extends, variables, conditions, loops, mixins and functions),</li>
    <li>vector graphic format <span {...classNames('highlight')}>SVG</span> for images (when possibility is given) or icons,</li>
    <li><span {...classNames('highlight')}>digital tools</span> Sketch, Adobe Photoshop & Illustrator,</li>
    <li><span {...classNames('highlight')}>cross-browser compatibility testing</span> (Chrome, Firefox, Safari, Edge,  Internet Explorer 11+) and <span {...classNames('highlight')}>cross-platform compatibility testing</span> (Android, Apple OS X and iOS) and</li>
    <li><span {...classNames('highlight')}>CSS frameworks</span> <Link href="https://getbootstrap.com/" title="Link to Bootstrap" isOuter>Bootstrap</Link> and <Link href="https://foundation.zurb.com/" title="Link to Foundation" isOuter>Foundation</Link>.</li>
  </ul>
);

export default knowledgeDataVisualOutput;
