import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.scrollBarVertical);

// TODO:
// - debounce
// - styles (perhaps transform for cleaner scroll)
// - on drag
// - listeners for each
// - touchmove
// - fix inconsistent indicator height cross browsers

class ScrollBarVertical extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.doc = {
      node: {},
      client: { height: 0 },
      scroll: { height: 0, top: 0 },
    };

    this.state = {
      indicator: {
        height: 0,
        transform: 'none',
      },
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
    log.output('componentDidMount', true);

    // TODO: try to work rather with refs to avoid timeout
    setTimeout(() => {
      this.setDoc();
      this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());

      // Adding listeners
      this.listeners.forEach((listener) => {
        window.addEventListener(listener.name, listener.method);
      });
    }, 0);
  }

  componentWillUnmount() {
    log.output('componentWillUnmount', true);

    // Removing listeners
    this.listeners.forEach((listener) => {
      window.removeEventListener(listener.name, listener.method);
    });
  }

  getIndicatorTop = () => {
    log.output('getIndicatorTop', true);

    const { doc } = this;
    const { indicator } = this.state;

    const height = doc.scroll.height - doc.client.height;
    const scrollPosition = height ? doc.scroll.top / height : 0;
    const top = scrollPosition * (doc.scroll.height - indicator.height);

    return top;
  }

  getIndicatorHeight = () => {
    log.output('getIndicatorHeight', true);

    const { doc } = this;
    const height = parseInt((doc.client.height / doc.scroll.height) * doc.client.height, 10); // eslint-disable-line max-len

    return height;
  }

  setIndicatorState = (top, height) => {
    log.output('setIndicatorState', true);

    this.setState(() => ({
      indicator: {
        transform: `translateX(0) translateY(${top}px)`,
        height,
      },
    }));
  }

  setDoc = () => {
    log.output('setDoc', true);

    const nodeHtml = document.documentElement;
    const nodeBody = nodeHtml.querySelector('body');

    this.doc = {
      node: nodeHtml,
      client: {
        height: nodeHtml.clientHeight,
      },
      scroll: {
        height: nodeHtml.scrollHeight,
        top: Math.max(nodeHtml.scrollTop, nodeBody.scrollTop),
      },
    };
  }

  handleScroll = () => {
    log.output('handleScroll', true);

    this.setDoc();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  handleTouchMove = () => {
    log.output('handleTouchMove', true);

    this.setDoc();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  handleResize = () => {
    log.output('handleResize', true);

    this.setDoc();
    this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());
  }

  render() {
    log.output('render', true);

    const state = { ...this.state };
    const classNames = new BEMHelper('scroll-bar-vertical');

    return (
      <div {...classNames()}>
        <div {...classNames('indicator')} style={state.indicator} />
      </div>
    );
  }
}

export default ScrollBarVertical;
