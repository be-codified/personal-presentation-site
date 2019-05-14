import React from 'react';
// import shortid from 'shortid';
import { Helmet } from 'react-helmet';
import BEMHelper from 'react-bem-helper';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
import ScrollBarVertical from './components/scroll-bar-vertical/ScrollBarVertical';
// import CheckList from './components/check-list/CheckList';
import Knowledge from './components/knowledge/Knowledge';
import Navigation from './components/navigation/Navigation';
import dataNavigation from './data/navigation';
// import checkListData from './components/check-list/check-list-data';
import ScrollToAnchor from './components/scroll-to-anchor/ScrollToAnchor';
import Link from './components/link/Link';

function App() {
  const classNames = {
    knowledge: new BEMHelper('knowledge'),
  };

  return (
    <div id="top" className="space-padding-large">
      {/* Meta data */}
      <Helmet>
        <title>front-end web developer | be-codified.com</title>
      </Helmet>
      {/* / Meta data */}
      <ScrollBarVertical />
      {/* Back to top
        TODO:
          -show button only when 30% of document is reached
      */}
      <ScrollToAnchor
        href="#top"
        // selectAnchor={this.selectAnchor}
        offset={10}
        className="back-to-top text-uppercase text-no-underline"
      >
        Back to top
      </ScrollToAnchor>
      {/* / Back to top */}

      <Navigation items={dataNavigation.main} />
      <hr />
      <Intro />
      <hr />
      {/* eslint-disable max-len */}
      {/* My main skills */}
      <Knowledge heading="My main skills" id="section-skills-my-main-skills">
        <ul>
          <li>understanding of developing for the web and a <span {...classNames.knowledge('highlight')}>careful eye for design,</span>
          </li>
          <li>ability to <span {...classNames.knowledge('highlight')}>translate designs</span> into semantic, accessible front-end code,</li>
          <li>understanding of <span {...classNames.knowledge('highlight')}>modern web technologies and workflows,</span></li>
          <li>fully aware of <span {...classNames.knowledge('highlight')}>mobile and responsive design</span> and development practices,</li>
          <li>capable of <span {...classNames.knowledge('highlight')}>designing in a browser,</span></li>
          <li>understanding of <span {...classNames.knowledge('highlight')}>integration or modification of front-end code</span> with CMSs,</li>
          <li>knowing of <span {...classNames.knowledge('highlight')}>SEO</span>,</li>
          <li>understanding and <span {...classNames.knowledge('highlight')}>appreciation of colour and typography,</span></li>
          <li>ability to work directly with UX/UI and designers to implement designs and provide feedback on design if needed,</li>
          <li>excellent <span {...classNames.knowledge('highlight')}>communication skills</span> and</li>
          <li>ability to dive in and <span {...classNames.knowledge('highlight')}>learn new things</span> to find solutions for technical problems.</li>
        </ul>
      </Knowledge>
      {/* / My main skills */}
      <hr />
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'NFL American Football Widgets',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'React', 'cross-browser testing']}
        client="Sportradar d.o.o."
        type="team development"
        link={{
          text: 'live at official page',
          href: 'https://store.sportradar.com/en/widget/nfl/index.php',
          title: 'Go to official page',
        }}
        images={[
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
        ]}
      />
      <hr />
      {/* My skills to produce visual output */}
      <Knowledge heading="My skills to produce visual output">
        <ul>
          <li>markup language <span {...classNames.knowledge('highlight')}>HTML5</span> (using modern semantic markup e.g. <span {...classNames.knowledge('code')}>{['<main>']}</span><span {...classNames.knowledge('code')}>{['<header>']}</span><span {...classNames.knowledge('code')}>{['<nav>']}</span><span {...classNames.knowledge('code')}>{['<article>']}</span> and <span {...classNames.knowledge('code')}>{['<picture>']}</span>),</li>
          <li>cascading style sheets language <span {...classNames.knowledge('highlight')}>CSS3</span> within large scale projects:
            <ul>
              <li>using <span {...classNames.knowledge('highlight')}>modern properties</span>, writing highly <span {...classNames.knowledge('highlight')}>isolated, reusable, scalable and maintainable code</span> &mdash; no duplicated properties,</li>
              <li><span {...classNames.knowledge('highlight')}>responsive web design</span> based on media queries (mobile first principle),</li>
              <li>building <span {...classNames.knowledge('highlight')}>grid layout</span> with Flexbox or Grid properties, <span {...classNames.knowledge('highlight')}>web font embedding</span>, achieving  <span {...classNames.knowledge('highlight')}>transitions and animations</span> and</li>
              <li><span {...classNames.knowledge('highlight')}>BEM methodology</span> (writing classes e.g. <span {...classNames.knowledge('code')}>tree__leaf--brown</span>),</li>
            </ul>
          </li>
          <li>CSS extension language <span {...classNames.knowledge('highlight')}>SASS</span> (using nested properties, imports and extends, variables, conditions, loops, mixins and functions),</li>
          <li>vector graphic format <span {...classNames.knowledge('highlight')}>SVG</span> for images (when possibility is given) or icons,</li>
          <li><span {...classNames.knowledge('highlight')}>digital tools</span> Sketch, Adobe Photoshop & Illustrator,</li>
          <li><span {...classNames.knowledge('highlight')}>cross-browser compatibility testing</span> (Chrome, Firefox, Safari, Edge,  Internet Explorer 11+) and <span {...classNames.knowledge('highlight')}>cross-platform compatibility testing</span> (Android, Apple OS X and iOS) and</li>
          <li><span {...classNames.knowledge('highlight')}>CSS frameworks</span> <Link href="https://getbootstrap.com/" title="Link to Bootstrap" isOuter>Bootstrap</Link> and <Link href="https://foundation.zurb.com/" title="Link to Foundation" isOuter>Foundation</Link>.</li>
        </ul>
      </Knowledge>
      {/* / My skills to produce visual output
      {/* eslint-enable max-len */}
      <hr />
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'Petrol website &mdash; the largest Slovenian energy company',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing']}
        client="Petrol d.d. and Renderspace d.o.o."
        type="team development"
        link={{
          text: 'live at official page',
          href: 'https://www.petrol.si/',
          title: 'Go to official page',
        }}
        images={[
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
        ]}
      />
      <hr />
      {/* My skills to work with programming logic */}
      <Knowledge heading="My skills to work with programming logic">
        <ul>
          <li>
            <span {...classNames.knowledge('highlight')}>JavaScript</span>
            <ul>
              <li>object-oriented programming,</li>
              <li>
                ECMAScript6 &mdash; front-end frameworks e.g.&nbsp;
                <a href="/" title="Link to framework Angular">Angular</a>,&nbsp;
                <a href="/" title="Link to framework React">React</a> and&nbsp;
                <a href="/" title="Link to framework VueJS">VueJS</a>
              </li>
              <li>back-end technology <span {...classNames.knowledge('highlight')}>Node.js</span> and framework <span {...classNames.knowledge('highlight')}>Express</span></li>
            </ul>
          </li>
        </ul>
      </Knowledge>
      {/* / My skills to work with programming logic */}
      <hr />
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'BTC City &mdash; shopping mall with over 500 shops',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing']}
        client="BTC d.d. and Renderspace d.o.o."
        type="team development"
        link={{
          text: 'live at official page',
          href: 'http://www.btc-city.com/',
          title: 'Go to official page',
        }}
        images={[
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
        ]}
      />
      <hr />
      {/* My skills to ??? */}
      <Knowledge heading="My skills to ???">
        <ul>
          <li>TODO</li>
        </ul>
      </Knowledge>
      {/* / My skills to ??? */}
      <hr />
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'Mail starter &mdash; create lovely emails',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'cross-browser testing']}
        client="Renderspace d.o.o."
        type="individual development"
        link={{
          text: 'live',
          href: '#',
          title: 'Go to link',
        }}
        images={[
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
          {
            src: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=PORTFOLIO+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=PORTFOLIO+IMAGE 2x',
            alt: 'Portfolio image',
          },
        ]}
      />
      <hr />

      {/* How was this page made */}
      <Knowledge heading="How was this page made">
        <ul>
          <li>TODO</li>
        </ul>
      </Knowledge>
      {/* / How was this page made */}

      <hr />
      <Footer />
      <hr />
      <div className="text-center">
        <img src="https://travis-ci.com/be-codified/personal-presentation-site.svg?branch=develop" alt="" />
        <img src="https://heroku-badge.herokuapp.com/?app=be-codified&svg=1" alt="" />
        <img src="https://api.codacy.com/project/badge/Grade/21eae5ab878b480daea8c5fca18d3736" alt="" />
      </div>
      {/* {techCompScrollToAnchor} */}
      {/* --- Section check list --- */}
      {/* <CheckList data={checkListData} /> */}
      {/* /--- Section check list --- */}
    </div>
  );
}

export default App;
