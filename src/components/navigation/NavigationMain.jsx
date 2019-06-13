import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.navigationMain);

// TODO: add option to wrap in <nav> tag

function NavigationMain(props) {
  log.output('render', true);

  const { items, handleClickNavigationItem, clickDelay } = props;
  const classNames = new BEMHelper('navigation-main');
  let levelCounter = 1;

  return (
    <ul {...classNames('')}>
      {items.map(item => (
        <li key={shortid.generate()} {...classNames(`item-level-${levelCounter}`)}>
          {item.id
            ? (
              <ScrollToAnchor
                href={`#${item.id}`}
                handleClick={handleClickNavigationItem}
                offset={10}
                delay={clickDelay}
              >
                {item.text}
              </ScrollToAnchor>
            )
            : (
              <React.Fragment>
                <button
                  type="button"
                  {...classNames('item-text', '', item.classNames)}
                >
                  {item.text}
                </button>
              </React.Fragment>
            )
          }

          {item.items && (
            <div {...classNames('panel')}>
              <ul>
                {item.items.map(itemChild => (
                  <li key={shortid.generate()}>
                    <ScrollToAnchor
                      href={`#${itemChild.id}`}
                      handleClick={handleClickNavigationItem}
                      offset={10}
                      delay={clickDelay}
                    >
                      {itemChild.text}
                    </ScrollToAnchor>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

NavigationMain.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string.isRequired,
      classNames: PropTypes.string,
    }).isRequired,
  ).isRequired,
  handleClickNavigationItem: PropTypes.func.isRequired,
  clickDelay: PropTypes.number.isRequired,
};

export default NavigationMain;
