import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

// TODO:
// - debounce
// - styles (perhaps transform for cleaner scroll)
// - on drag
// - listeners for each
// - touchmove

class ScrollBarVertical extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.document = {
      node: {},
      client: { height: 0 },
      scroll: { height: 0, top: 0 },
    };

    this.state = {
      indicator: { top: 0, height: 0 },
    };

    // Listeners
    this.listeners = [
      {
        name: 'scroll',
        method: this.handleScroll,
      },
      {
        name: 'touchstart',
        method: this.handleTouchMove,
      },
      {
        name: 'touchmove',
        method: this.handleTouchMove,
      },
      {
        name: 'resize',
        method: this.handleResize,
      },
    ];
  }

  componentDidMount() {
    // console.log('--- Component did mount');

    // TODO: try to work rather with refs to avoid timeout
    setTimeout(() => {
      this.setDocument();
      this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());

      // Adding listeners
      this.listeners.forEach((listener) => {
        window.addEventListener(listener.name, listener.method);
      });
    }, 0);
  }

  componentWillUnmount() {
    // Removing listeners
    this.listeners.forEach((listener) => {
      window.removeEventListener(listener.name, listener.method);
    });
  }

  getIndicatorTop = () => {
    // console.log('--- Getting position');

    const doc = this.document;

    const height = doc.scroll.height - doc.client.height;
    const scrollPosition = height ? doc.scroll.top / height : 0;

    const { indicator } = this.state;
    const top = scrollPosition * (doc.scroll.height - indicator.height);

    return top;
  }

  getIndicatorHeight = () => {
    // console.log('--- Getting height');

    const doc = this.document;

    const height = parseInt((doc.client.height / doc.scroll.height) * doc.client.height, 10); // eslint-disable-line max-len

    return height;
  }

  setIndicatorState = (top, height) => {
    this.setState(() => ({ indicator: { top, height } }));
  }

  setDocument = () => {
    const nodeDocument = document.documentElement;

    this.document = {
      node: nodeDocument,
      client: {
        height: nodeDocument.clientHeight,
      },
      scroll: {
        height: nodeDocument.scrollHeight,
        top: nodeDocument.scrollTop,
      },
    };
  }

  handleScroll = () => {
    // console.log('--- Scrolling');

    this.setDocument();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  handleTouchMove = () => {
    // console.log('--- Touchmove');
    this.setDocument();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  handleResize = () => {
    // console.log('--- Resizing');

    this.setDocument();
    this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());
  }

  render() {
    // console.log('--- Rendering');

    const state = { ...this.state };
    const classNames = new BEMHelper('scroll-bar-vertical');

    return (
      <div {...classNames()}>
        <div {...classNames('indicator')} style={state.indicator} />
      </div>
    );
  }
}

// ScrollBarVertical.defaultProps = {
//   somePropName: 'someValue',
// };

// ScrollBarVertical.propTypes = {
//   somePropName: PropTypes.string.isRequired,
// };

export default ScrollBarVertical;