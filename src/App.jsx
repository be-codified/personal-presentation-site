import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import BEMHelper from 'react-bem-helper';
// import Highlight from 'react-highlight.js';
import shortid from 'shortid';
// import Tech from './components/tech/Tech';
import Portfolio from './components/portfolio/Portfolio';
import CheckList from './components/check-list/CheckList';
// import Knowledge from './components/knowledge/Knowledge';
import Sidebar from './components/sidebar/Sidebar';
import checkListData from './components/check-list/check-list-data';

class App extends Component {
  someMethod = () => {}

  render() {
    // const section = 'some-section';

    // const classNames = {
    //   knowledge: new BEMHelper('knowledge'),
    // };

    return (
      <div className="space-padding-large">
        <Sidebar />

        <Portfolio
          heading={{
            intro: 'Latest work',
            main: 'Portfolio item heading',
          }}
          desc="Some description of portfolio item"
          tags={['HTML5', 'CSS3', 'SCSS', 'responsive design', 'React']}
          client="Client name"
          link={{
            text: 'link text',
            href: 'https://store.sportradar.com/en/widget/nfl/index.php',
            title: 'link title',
          }}
          image={{
            src: 'https://via.placeholder.com/320x180.jpg?text=Sample+portfolio+image',
            srcSet: 'https://via.placeholder.com/320x180.jpg?text=Sample+portfolio+image 1x, https://via.placeholder.com/640x360.jpg?text=Sample+portfolio+image 2x',
            alt: 'Some portfolio image',
          }}
        />

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

        {/* Tech */}
        {/* TODO: move in config */}

        {/* <Tech
          sidebar={
            {
              section,
              items: [
                {
                  id: `${section}-test-1`,
                  text: 'test 1',
                },
                {
                  id: `${section}-test-2`,
                  text: 'test 2',
                },
              ],
            }
          }
        >
          <h2>How was made title</h2>
          <h3 id={`${section}-test-1`}>How was made subtitle 1</h3>
          <h3 id={`${section}-test-2`}>How was made subtitle 2</h3>
          <Highlight language="scss">
            <p>test</p>
          </Highlight>
        </Tech> */}
        {/* / Tech */}

        {/* --- Section check list --- */}
        <div>
          {/* Sidebar */}
          <ul className="list-no-style-type">
            {
              checkListData.map(item => (
                <li key={shortid.generate()}>
                  <a href={`#${item.id}`} title={item.heading}>{item.heading}</a>
                </li>
              ))
            }
          </ul>
        </div>
        <CheckList data={checkListData} />
        {/* /--- Section check list --- */}
      </div>
    );
  }
}

export default App;
