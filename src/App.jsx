import React from 'react';
// import shortid from 'shortid';
import BEMHelper from 'react-bem-helper';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
import ScrollBarVertical from './components/scroll-bar-vertical/ScrollBarVertical';
// import CheckList from './components/check-list/CheckList';
import Knowledge from './components/knowledge/Knowledge';
// import checkListData from './components/check-list/check-list-data';

function App() {
  const classNames = {
    knowledge: new BEMHelper('knowledge'),
  };

  return (
    <div className="space-padding-large">
      <ScrollBarVertical />
      <Intro />
      <hr />
      {/* eslint-disable max-len */}
      {/* My main strengths */}
      <Knowledge heading="My main strengths">
        <ul>
          <li>understanding of developing for the web and a <span {...classNames.knowledge('highlight')}>careful eye for design,</span></li>
          <li>ability to <span {...classNames.knowledge('highlight')}>translate designs</span> into semantic, accessible front-end code,</li>
          <li>understanding of <span {...classNames.knowledge('highlight')}>modern web technologies and workflows,</span></li>
          <li>fully aware of <span {...classNames.knowledge('highlight')}>mobile and responsive design</span> and development practices,</li>
          <li>capable of <span {...classNames.knowledge('highlight')}>designing in a browser,</span></li>
          <li>understanding of <span {...classNames.knowledge('highlight')}>integration or modification of front-end code</span> with CMSs,</li>
          <li>knowing of <span {...classNames.knowledge('highlight')}>SEO</span>,</li>
          <li>understanding and <span {...classNames.knowledge('highlight')}>appreciation of colour and typography,</span></li>
          <li>ability to work directly with UX/UI and designers to implement designs and provide feedback on design if needed,</li>
          <li>excellent <span {...classNames.knowledge('highlight')}>communication skills,</span></li>
          <li>ability to dive in and <span {...classNames.knowledge('highlight')}>learn new things</span> to find solutions for technical problems.</li>
        </ul>
      </Knowledge>
      {/* / My main strengths */}
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
          <li>
            <span {...classNames.knowledge('highlight')}>HTML5</span>
            (using modern markup e.g.&nbsp;
            <span {...classNames.knowledge('code')}>{['<article>']}</span>&nbsp;
            <span {...classNames.knowledge('code')}>{['<aside>']}</span>&nbsp;
            <span {...classNames.knowledge('code')}>{['<main>']}</span>
            ),
          </li>
          <li><span {...classNames.knowledge('highlight')}>CSS3</span> within large scale projects,
            <ul>
              <li>using modern properties</li>
              <li>highly reusability, no duplicates</li>
              <li>layout (grid?)</li>
              <li>BEM methodology</li>
              <li>web font embedding</li>
              <li>transitions and animations</li>
              <li>SVG</li>
              <li>CSS pre-processor Sass (use word like Css style isolation, reusable, scalable)</li>
            </ul>
          </li>
          <li>template engine <span {...classNames.knowledge('highlight')}>Nunjucks</span></li>
          <li><span {...classNames.knowledge('highlight')}>graphic tools</span> (e.g. Sketch, Adobe Photoshop & Illustrator).</li>
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
          <li>todo</li>
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
