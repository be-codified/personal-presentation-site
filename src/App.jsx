import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from './components/portfolio/Portfolio';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
import ScrollBarVertical from './components/scroll-bar-vertical/ScrollBarVertical';

import Knowledge from './components/knowledge/Knowledge';
import dataKnowledgeMain from './components/knowledge/data/main';
import dataKnowledgeVisualOutput from './components/knowledge/data/visual-output';
import dataKnowledgeProgramming from './components/knowledge/data/programming';

import Navigation from './components/navigation/Navigation';
import dataNavigation from './components/navigation/data/main';

import ScrollToAnchor from './components/scroll-to-anchor/ScrollToAnchor';

// import BEMHelper from 'react-bem-helper';
// import shortid from 'shortid';
// import CheckList from './components/check-list/CheckList';
// import checkListData from './components/check-list/check-list-data';

function App() {
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
      <Intro />

      {/* My main skills */}
      <Knowledge
        heading="My main skills"
        id="section-skills-my-main-skills"
      >
        {dataKnowledgeMain}
      </Knowledge>
      {/* / My main skills */}

      {/* Portfolio NFL American Football Widgets */}
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'NFL American Football Widgets',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'React', 'cross-browser testing', 'cross-platform testing']}
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
      {/* / Portfolio NFL American Football Widgets */}

      {/* My skills to produce visual output */}
      <Knowledge
        heading="My skills to produce visual output"
        id="section-skills-my-skills-to-produce-visual-output"
      >
        {dataKnowledgeVisualOutput}
      </Knowledge>
      {/* / My skills to produce visual output */}

      {/* Portfolio Petrol */}
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'Petrol website &mdash; the largest Slovenian energy company',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing', 'cross-platform testing']}
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
      {/* / Portfolio Petrol */}

      {/* My skills to work with programming logic */}
      <Knowledge
        heading="My skills to work with programming logic"
        id="todo"
      >
        {dataKnowledgeProgramming}
      </Knowledge>
      {/* / My skills to work with programming logic */}

      {/* Portfolio BTC City */}
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'BTC City &mdash; shopping mall with over 500 shops',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'cross-browser testing', 'cross-platform testing']}
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
      {/* / Portfolio BTC City */}

      {/* My skills to ??? */}
      <Knowledge
        heading="My skills to ???"
        id="todo"
      >
        <ul>
          <li>TODO</li>
        </ul>
      </Knowledge>
      {/* / My skills to ??? */}

      {/* Portfolio Mail starter */}
      <Portfolio
        heading={{
          pre: 'Latest work',
          main: 'Mail starter &mdash; create lovely emails',
        }}
        desc="Some description of portfolio item"
        tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'cross-browser testing', 'cross-platform testing']}
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
      {/* / Portfolio Mail starter */}

      {/* How was this page made */}
      <Knowledge
        heading="How was this page made"
        id="todo"
      >
        <ul>
          <li>TODO</li>
        </ul>
      </Knowledge>
      {/* / How was this page made */}

      <Footer />
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
