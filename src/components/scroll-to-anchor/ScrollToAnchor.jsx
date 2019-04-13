import React, { Component } from 'react';
import PropTypes from 'prop-types';

// TODO: update url with hash

class ScrollToAnchor extends Component {
  constructor(props) {
    super(props);
    const { offset } = this.props;
    this.offset = offset;
  }

  handleClick = (event) => {
    const { selectAnchor } = this.props;
    event.preventDefault();

    // Get hash of clicked anchor link element
    const { hash } = event.currentTarget;
    // Selecting anchor element with method from parent
    const element = selectAnchor(hash);
    // Get position of anchor element
    const elementPosition = window.pageYOffset + element.getBoundingClientRect().top;

    // Calculate scroll position
    const scrollPosition = elementPosition - this.offset;

    // Scroll to position
    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth',
    });
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
