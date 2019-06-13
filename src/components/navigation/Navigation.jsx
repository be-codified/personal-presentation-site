import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.navigation);

// TODO: add option to wrap in <nav> tag

function Navigation(props) {
  log.output('render', true);

  const { items, handleClick } = props;
  const classNames = new BEMHelper('navigation');

  return (
    <ul {...classNames('')}>
      {items.map(item => (
        <li key={shortid.generate()} {...classNames('item')}>
          {
            item.id
              ? (
                <ScrollToAnchor
                  href={`#${item.id}`}
                  handleClick={handleClick}
                  offset={10}
                >
                  {item.text}
                </ScrollToAnchor>
              )
              : (
                <button
                  type="button"
                  {...classNames('item-text', '', item.classNames)}
                >
                  {item.text}
                </button>
              )
          }

          {/* Checking if item has children and recursively render component again */}
          {item.items && <Navigation items={item.items} handleClick={handleClick} />}
        </li>
      ))}
    </ul>
  );
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      classNames: PropTypes.string,
    }).isRequired,
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Navigation;
