import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// import BEMHelper from 'react-bem-helper';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';

class Navigation extends Component {
  someMethod = () => {}

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map(item => (
          <li key={shortid.generate()}>
            <ScrollToAnchor
              href={`#${item.id}`}
              selectAnchor={this.selectAnchor}
              offset={10}
            >
              {item.text}
            </ScrollToAnchor>
            {/* Check if item has children and recursively render component again */}
            {item.items && <Navigation items={item.items} />}
          </li>
        ))}
      </ul>
    );
  }
}

Navigation.defaultProps = {
  somePropName: 'someValue',
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Navigation;
