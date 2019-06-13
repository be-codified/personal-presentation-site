import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { Helmet } from 'react-helmet';
import helperGetNodeAnchor from './helpers/get-node-anchor';
import LatestWork from './components/latest-work/LatestWork';
import Intro from './components/intro/Intro';
import Footer from './components/footer/Footer';
// import ScrollBarVertical from './components/scroll-bar-vertical/ScrollBarVertical';
import Knowledge from './components/knowledge/Knowledge';
import knowledgeDataMain from './components/knowledge/data/main';
import knowledgeDataVisualOutput from './components/knowledge/data/visual-output';
import knowledgeDataProgramming from './components/knowledge/data/programming';
import knowledgeDataMagicalTools from './components/knowledge/data/magical-tools';
import knowledgeDataHowWasMade from './components/knowledge/data/how-was-made';
// import Navigation from './components/navigation/Navigation';
import NavigationMain from './components/navigation/NavigationMain';
import navigationDataMain from './components/navigation/data/main';
import navigationDataSections from './components/navigation/data/sections';
import Drawer from './components/drawer/Drawer';
import ScrollToAnchor from './components/scroll-to-anchor/ScrollToAnchor';
// import Clients from './components/clients/Clients';
import CheckList from './components/check-list/CheckList';
import checkListData from './components/check-list/data/check-list';
import { logConfig, Log } from './helpers/log';

const log = new Log(logConfig.app);

/**
 * Class representing app.
 * @extends Component
 */

class App extends Component {
  constructor(props) {
    /**
     * Create app
     *
     * @param {object} props - Props object
     */

    super(props);
    this.refApp = React.createRef();

    // Setting default properties
    this.state = {
      drawer: {
        isFixedForTabletAndBelow: false,
      },
    };
  }

  /**
   * Select anchor
   *
   * Method called from child component to be able to select anchor.
   *
   * @param {string} hash - Hash
   * @return {object} Node anchor
   */

  selectAnchor = (hash) => {
    log.output('selectAnchor', true);

    return helperGetNodeAnchor(this.refApp, hash);
  }

  /**
   * Handle click navigation item
   *
   * Method called from child component to be able to toggle drawer and select anchor.
   *
   * @param {string} hash - Hash
   * @return {object} Node anchor
   */

  handleClickNavigationItem = (hash) => {
    log.output('handleClickNavigationItem', true);

    this.toggleDrawer();
    return helperGetNodeAnchor(this.refApp, hash);
  }

  /**
   * Toggle drawer
   *
   * Method used
   * - when button open is clicked in this component
   * - when button close is clicked in Drawer component (method passed through props into child)
   * @param {boolean} isFixedForTabletAndBelow - Is fixed for tablet and below breakpoints
   * @return {void}
   */

  toggleDrawer = () => {
    log.output('toggleDrawer', true);

    const state = { ...this.state };

    this.setState(() => ({
      drawer: {
        isFixedForTabletAndBelow: !state.drawer.isFixedForTabletAndBelow,
      },
    }));
  }

  /**
   * Render
   *
   * @return {object} React component instance
   */

  render() {
    log.output('render', true);

    const state = { ...this.state };
    const classNames = {
      drawer: new BEMHelper('drawer'),
    };

    return (
      <div ref={this.refApp}>
        <div id="top" className="space-padding-large">
          {/* Meta data */}
          <Helmet>
            <title>front-end web developer | be-codified.com</title>
          </Helmet>
          {/* / Meta data */}

          {/* Back to top
            TODO:
              -show button only when 30% of document is reached
          */}
          <ScrollToAnchor
            href="#top"
            handleClick={this.selectAnchor}
            offset={10}
            className="back-to-top text-uppercase text-no-underline"
          >
            Back to top
          </ScrollToAnchor>
          {/* / Back to top */}

          {/* Drawer */}
          <button
            type="button"
            onClick={this.toggleDrawer}
            {...classNames.drawer('button-open', '', 'button')}
          >
            Open navigation
          </button>
          <Drawer
            isFixedForTabletAndBelow={state.drawer.isFixedForTabletAndBelow}
            toggleDrawer={this.toggleDrawer}
          >
            <NavigationMain
              items={navigationDataMain}
              handleClickNavigationItem={this.handleClickNavigationItem}
              clickDelay={400}
            />
          </Drawer>
          {/* Drawer */}

          <Intro />

          {/* My main skills */}
          <Knowledge
            heading="My main skills"
            id={`${navigationDataSections.skills}-my-main-skills`}
          >
            {knowledgeDataMain}
          </Knowledge>
          {/* / My main skills */}

          {/* Latest work NFL American Football Widgets */}
          <LatestWork
            id={`${navigationDataSections.latestWork}-nfl-american-football-widgets`}
            heading={{
              pre: 'Latest work',
              main: 'NFL American Football Widgets',
            }}
            desc="Some description of latest work item"
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
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
            ]}
          />
          {/* / Latest work NFL American Football Widgets */}

          {/* My skills to produce visual output */}
          <Knowledge
            heading="My skills to produce visual output"
            id={`${navigationDataSections.skills}-my-skills-to-produce-visual-output`}
          >
            {knowledgeDataVisualOutput}
          </Knowledge>
          {/* / My skills to produce visual output */}

          {/* Latest work Petrol */}
          <LatestWork
            id={`${navigationDataSections.latestWork}-petrol`}
            heading={{
              pre: 'Latest work',
              main: 'Petrol &mdash; the largest Slovenian energy company',
            }}
            desc="Some description of latest work item"
            tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'Nunjucks', 'cross-browser testing', 'cross-platform testing']}
            client="Petrol d.d. and Renderspace d.o.o."
            type="team development"
            link={{
              text: 'live at official page',
              href: 'https://www.petrol.si/',
              title: 'Go to official page',
            }}
            images={[
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
            ]}
          />
          {/* / Latest work Petrol */}

          {/* My skills to work with programming logic */}
          <Knowledge
            heading="My skills to work with programming logic"
            id={`${navigationDataSections.skills}-my-skills-to-work-with-programming-logic`}
          >
            {knowledgeDataProgramming}
          </Knowledge>
          {/* / My skills to work with programming logic */}

          {/* Latest work BTC City */}
          <LatestWork
            id={`${navigationDataSections.latestWork}-btc-city`}
            heading={{
              pre: 'Latest work',
              main: 'BTC City &mdash; shopping mall with over 500 shops',
            }}
            desc="Some description of latest work item"
            tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'JavaScript', 'Nunjucks', 'cross-browser testing', 'cross-platform testing']}
            client="BTC d.d. and Renderspace d.o.o."
            type="team development"
            link={{
              text: 'live at official page',
              href: 'http://www.btc-city.com/',
              title: 'Go to official page',
            }}
            images={[
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=v+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
            ]}
          />
          {/* / Latest work BTC City */}

          {/* Magical tools */}
          <Knowledge
            heading="Magical tools I use"
            id={`${navigationDataSections.skills}-magical-tools-i-use`}
          >
            {knowledgeDataMagicalTools}
          </Knowledge>
          {/* / Magical tools */}

          {/* Latest work Mail starter */}
          <LatestWork
            id={`${navigationDataSections.latestWork}-mail-starter`}
            heading={{
              pre: 'Latest work',
              main: 'Mail starter &mdash; create lovely emails',
            }}
            desc="Some description of latest work item"
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
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
              {
                src: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE',
                srcSet: 'https://via.placeholder.com/320x180.jpg?text=LATEST+WORK+IMAGE 1x, https://via.placeholder.com/640x360.jpg?text=LATEST+WORK+IMAGE 2x',
                alt: 'Latest work image',
              },
            ]}
          />
          {/* / Latest work Mail starter */}

          {/* Clients */}
          {/* <Clients /> */}
          {/* / Clients */}

          {/* How was this page made */}
          <Knowledge
            heading="How was this page made"
            id={navigationDataSections.howWasMade}
          >
            {knowledgeDataHowWasMade}
          </Knowledge>
          {/* / How was this page made */}

          {/* Check list */}
          <CheckList data={checkListData} />
          {/* / Check list */}

          <Footer />
          <div className="text-center">
            <img src="https://travis-ci.com/be-codified/personal-presentation-site.svg?branch=develop" alt="" />
            <img src="https://heroku-badge.herokuapp.com/?app=be-codified&svg=1" alt="" />
            <img src="https://api.codacy.com/project/badge/Grade/21eae5ab878b480daea8c5fca18d3736" alt="" />
          </div>
        </div>
        {/* <ScrollBarVertical /> */}
      </div>
    );
  }
}

export default App;
