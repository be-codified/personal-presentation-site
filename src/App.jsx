import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import BEMHelper from 'react-bem-helper';
// import shortid from 'shortid';
// import techCompScrollToAnchor from './components/tech/data/techCompScrollToAnchor';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
// import CheckList from './components/check-list/CheckList';
// import Knowledge from './components/knowledge/Knowledge';
// import Navigation from './components/navigation/Navigation';
import ScrollBarVertical from './components/scroll-bar-vertical/ScrollBarVertical';
// import checkListData from './components/check-list/check-list-data';

class App extends Component {
  someMethod = () => {}

  render() {
    // const classNames = {
    //   knowledge: new BEMHelper('knowledge'),
    // };

    return (
      <div className="space-padding-large">
        <ScrollBarVertical />
        <Intro />
        <hr />

        <Portfolio
          heading={{
            pre: 'Latest work',
            main: 'NFL American Football Widgets',
          }}
          desc="Some description of portfolio item"
          tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'React', 'cross-browser testing']}
          client="Sportradar d.o.o."
          type="team of developers"
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

        <Portfolio
          heading={{
            pre: 'Latest work',
            main: 'Petrol website &ndash; the largest Slovenian energy company',
          }}
          desc="Some description of portfolio item"
          tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing']}
          client="Petrol d.d. and Renderspace d.o.o."
          type="team of developers"
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

        <Portfolio
          heading={{
            pre: 'Latest work',
            main: 'BTC city Ljubljana shopping mall',
          }}
          desc="Some description of portfolio item"
          tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing']}
          client="BTC d.d. and Renderspace d.o.o."
          type="team of developers"
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

        <img src="https://travis-ci.com/be-codified/personal-presentation-site.svg?branch=develop" alt="" />
        <img src="https://heroku-badge.herokuapp.com/?app=be-codified&svg=1" alt="" />
        <img src="https://api.codacy.com/project/badge/Grade/21eae5ab878b480daea8c5fca18d3736" alt="" />


        {/* {techCompScrollToAnchor} */}

        {/* eslint-disable max-len */}
        {/* My main strengths */}
        {/* <Knowledge heading="// TODO: My main strengths">
          <ul>
            <li>strong understanding of developing for the web and a <span>careful eye for design,</span></li>
            <li>exceptional ability to translate designs into semantic, accessible front-end code,</li>
            <li>strong understanding of modern web technologies and workflows,</li>
            <li>strong understanding of mobile and responsive design and development practices,</li>
            <li>solid understanding of designing in a browser,</li>
            <li>solid understanding of integration or modification of front-end code with CMSs,</li>
            <li>solid understanding of SEO,</li>
            <li>strong understanding and appreciation of colour and typography,</li>
            <li>ability to work directly with UX/UI and designers to implement designs and provide feedback on design if needed,</li>
            <li>excellent communication skills,</li>
            <li>ability to dive in and learn new things to find solutions for technical problems.</li>
          </ul>
        </Knowledge> */}
        {/* / My main strengths */}

        {/* My skills to produce visual output */}
        {/* <Knowledge heading="My skills to produce visual output">
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
                <li>nunjucks</li>
              </ul>
            </li>
            <li>graphic tools (e.g. Sketch, Adobe Photoshop & Illustrator).</li>
          </ul>
        </Knowledge> */}
        {/* / My skills to produce visual output */}
        {/* eslint-enable max-len */}

        {/* My skills to ??? */}
        {/* <Knowledge heading="My skills to ???">
          <ul>
            <li><span {...classNames.knowledge('highlight')}>JavaScript</span>
              <ul>
                <li>object-oriented programming,</li>
                <li>
                  ECMAScript6 — front-end frameworks e.g.&nbsp;
                  <a href="/" title="Link to framework Angular">Angular</a>,&nbsp;
                  <a href="/" title="Link to framework React">React</a> and&nbsp;
                  <a href="/" title="Link to framework VueJS">VueJS</a>
                </li>
                <li>backend technology Node.js and framework Express</li>
              </ul>
              and
            </li>
          </ul>
        </Knowledge> */}
        {/* / My skills to ??? */}

        {/* --- Section check list --- */}
        {/* <CheckList data={checkListData} /> */}
        {/* /--- Section check list --- */}
      </div>
    );
  }
}

export default App;
