import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';

class HowWasMade extends Component {
  selectAnchor = (hash) => {
    // Method called from child to be able to select anchor element
    const elementAnchor = this.element.querySelector(hash);
    return elementAnchor;
  }

  render() {
    const { sidebar, children } = this.props;
    const className = 'check-list';

    return (
      <div
        ref={(element) => { this.element = element; }}
        className={`${className} space-padding-large`}
      >
        <ul className={`${className}__sidebar list-no-style-type`}>
          {
            sidebar.items.map(item => (
              <li key={shortid.generate()}>
                <ScrollToAnchor
                  href={`#${item.id}`}
                  selectAnchor={this.selectAnchor}
                  offset={10}
                >
                  {item.text}
                </ScrollToAnchor>
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
    section: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default HowWasMade;
