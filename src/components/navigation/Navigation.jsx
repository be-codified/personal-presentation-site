import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';

function Navigation(props) {
  const { items } = props;

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
          {/* Checking if item has children and recursively render component again */}
          {item.items && <Navigation items={item.items} />}
        </li>
      ))}
    </ul>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Navigation;
