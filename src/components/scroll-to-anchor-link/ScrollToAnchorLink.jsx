import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

const configDefault = {
  targetOffset: 30
}

// TODO: update url with hash

class ScrollToAnchorLink extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    if (this.props.targetOffset) {
      console.log('Target offset given: ' + this.props.targetOffset);
      this.targetOffset = parseInt(this.props.targetOffset);
    } else {
      console.log('No target offset given, using default value ' + configDefault.targetOffset);
      this.targetOffset = configDefault.targetOffset;
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log('clicked?');
    console.log(this.targetOffset);

    // Get target element and its position
    const elementTarget = document.querySelector(event.target.hash);
    const elementTargetPosition = window.pageYOffset + elementTarget.getBoundingClientRect().top;

    // Calculate scroll position
    const scrollPosition = elementTargetPosition - this.targetOffset;

    // Scroll to position
    window.scrollTo({
      top: scrollPosition,
      left: 0,
      behavior: 'smooth',
    });
  }

  render() {
    const { href, innerRef } = this.props;

    // console.log(innerRef);

    return (
      <a
        href={href}
        onClick={this.handleClick}
      >
        {this.props.children}
      </a>
    );
  }
}

/*
ScrollToAnchorLink.propTypes = {
  sidebar: PropTypes.PropTypes.shape({
    section: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};
*/

export default React.forwardRef((props, ref) => <ScrollToAnchorLink innerRef={ref} {...props} />);
