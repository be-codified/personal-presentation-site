import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './how-was-made.scss';

class HowWasMade extends Component {
  someFunction = () => {}

  render() {
    const { sidebar, children } = this.props;
    const className = 'check-list';

    return (
      <div className={`${className} space-padding-large`}>
        <ul className={`${className}__sidebar list-no-style-type`}>
          {
            sidebar.items.map(item => (
              <li key={shortid.generate()}>
                <a
                  className="js-scroll-to-anchor"
                  href={`#${sidebar.section}-${item.id}`}
                  title={item.heading}
                >
                  {item.heading}
                </a>
              </li>
            ))
          }
        </ul>
        <div className={`${className}__content`}>
          {children}
        </div>
      </div>
    );
  }
}

HowWasMade.propTypes = {
  sidebar: PropTypes.PropTypes.shape({
    section: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        heading: PropTypes.string,
      }),
    ),
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default HowWasMade;
