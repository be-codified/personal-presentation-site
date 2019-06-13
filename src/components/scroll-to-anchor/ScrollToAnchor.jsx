import React, { Component } from 'react';
import PropTypes from 'prop-types';
import helperGetNodeAnchorScrollPosition from '../../helpers/get-node-anchor-scroll-position';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.scrollToAnchor);

/**
 * Class representing scroll to anchor.
 * @extends Component
 */

class ScrollToAnchor extends Component {
  /**
   * Handle click
   *
   * @return {void}
   */

  handleClick = (event) => {
    log.output('handleClick', true);

    const { handleClick, offset, delay } = this.props;
    event.preventDefault();

    // Get hash of clicked anchor link
    const { hash } = event.currentTarget;

    // Selecting anchor node with method from parent
    const node = handleClick(hash);

    // Calculate scroll position
    const scrollPosition = helperGetNodeAnchorScrollPosition(node, offset);

    function scrollTo() {
      window.scrollTo({
        top: scrollPosition,
        left: 0,
        behavior: 'smooth',
      });
    }

    if (delay) {
      setTimeout(() => {
        // Scroll to position with delay
        scrollTo();
      }, delay);
    } else {
      // Scroll to position
      scrollTo();
    }

    // Update URL
    history.replaceState({}, false, hash); // eslint-disable-line no-restricted-globals
  }

  /**
   * Render
   *
   * @return {object} React component instance
   */

  render() {
    log.output('render', true);

    const { href, className, children } = this.props;

    return (
      <a href={href} onClick={this.handleClick} className={className}>
        {children}
      </a>
    );
  }
}

ScrollToAnchor.defaultProps = {
  className: '',
  offset: 30,
  delay: 0,
};

ScrollToAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  offset: PropTypes.number,
  delay: PropTypes.number,
  children: PropTypes.string.isRequired,
};

export default ScrollToAnchor;
