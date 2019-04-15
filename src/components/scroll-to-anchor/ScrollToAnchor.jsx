import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ScrollToAnchor extends Component {
  constructor(props) {
    super(props);
    const { offset } = this.props;
    this.offset = offset;
  }

  handleClick = (event) => {
    const { selectAnchor } = this.props;
    event.preventDefault();

    // Get hash of clicked anchor link
    const { hash } = event.currentTarget;
    // Selecting anchor node with method from parent
    const node = selectAnchor(hash);
    // Get position of anchor
    const nodePosition = window.pageYOffset + node.getBoundingClientRect().top;

    // Calculate scroll position
    const scrollPosition = nodePosition - this.offset;

    // Scroll to position
    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth',
    });

    // Update URL
    history.replaceState({}, false, hash); // eslint-disable-line no-restricted-globals
  }

  render() {
    const { href, children } = this.props;

    return (
      <a href={href} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

ScrollToAnchor.defaultProps = {
  offset: 30,
};

ScrollToAnchor.propTypes = {
  href: PropTypes.string.isRequired,
  selectAnchor: PropTypes.func.isRequired,
  offset: PropTypes.number,
  children: PropTypes.string.isRequired,
};

export default ScrollToAnchor;
