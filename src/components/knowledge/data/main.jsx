/* eslint-disable max-len */

import React from 'react';
import BEMHelper from 'react-bem-helper';

const classNames = new BEMHelper('knowledge');

const knowledgeDataMain = (
  <ul>
    <li>understanding of developing for the web and a <span {...classNames('highlight')}>careful eye for design,</span>
    </li>
    <li>ability to <span {...classNames('highlight')}>translate designs</span> into semantic, accessible front-end code,</li>
    <li>understanding of <span {...classNames('highlight')}>modern web technologies and workflows,</span></li>
    <li>fully aware of <span {...classNames('highlight')}>mobile and responsive design</span> and development practices,</li>
    <li>capable of <span {...classNames('highlight')}>designing in a browser,</span></li>
    <li>understanding of <span {...classNames}>integration or modification of front-end code</span> with CMSs,</li>
    <li>knowing of <span {...classNames('highlight')}>SEO,</span></li>
    <li>understanding and <span {...classNames('highlight')}>appreciation of color and typography,</span></li>
    <li>ability to work directly with UX/UI and designers to implement designs and provide feedback on design if needed,</li>
    <li>excellent <span {...classNames('highlight')}>communication skills</span> and</li>
    <li>ability to dive in and <span {...classNames('highlight')}>learn new things</span> to find solutions for technical problems.</li>
  </ul>
);

export default knowledgeDataMain;
