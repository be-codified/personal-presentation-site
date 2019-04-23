import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

// TODO:
// - debounce
// - optimize logic
// - styles (perhaps transform for cleaner scroll)
// - on drag

class ScrollBarVertical extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.document = {
      node: {},
      client: { height: 0 },
      scroll: { height: 0, top: 0 },
    };

    // Setting default properties for state
    this.state = {
      indicator: { top: 0, height: 0 },
    };
  }

  componentDidMount() {
    // console.log('--- Component did mount');

    // TODO: try to work rather with refs to avoid timeout
    setTimeout(() => {
      this.setDocument();
      this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());

      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('touchmove', this.handleTouchMove);
      window.addEventListener('resize', this.handleResize);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('resize', this.handleResize);
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
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
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
