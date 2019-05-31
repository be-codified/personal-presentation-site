import React, { Component } from 'react';
import BEMHelper from 'react-bem-helper';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.scrollBarVertical);

/**
  TODO:
    - debounce
    - styles (perhaps transform for cleaner scroll)
    - on drag
    - listeners for each
    - touchmove
    - fix inconsistent indicator height cross browsers
 */

/**
 * Class representing vertical scroll bar.
 * @extends Component
 */

class ScrollBarVertical extends Component {
  constructor(props) {
    /**
     * Create vertical scroll bar
     * @param {object} props - Props object
     */

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

  /**
   * Component did mount
   *
   * @return {void}
   */

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

  /**
   * Component will unmount
   *
   * @return {void}
   */

  componentWillUnmount() {
    log.output('componentWillUnmount', true);

    // Removing listeners
    this.listeners.forEach((listener) => {
      window.removeEventListener(listener.name, listener.method);
    });
  }

  /**
   * Get indicator top
   *
   * @return {number} Top value
   */

  getIndicatorTop = () => {
    log.output('getIndicatorTop', true);

    const { doc } = this;
    const { indicator } = this.state;

    const height = doc.scroll.height - doc.client.height;
    const scrollPosition = height ? doc.scroll.top / height : 0;
    const top = scrollPosition * (doc.scroll.height - indicator.height);

    return top;
  }

  /**
   * Get indicator height
   *
   * @return {number} Height value
   */

  getIndicatorHeight = () => {
    log.output('getIndicatorHeight', true);

    const { doc } = this;
    const height = parseInt((doc.client.height / doc.scroll.height) * doc.client.height, 10); // eslint-disable-line max-len

    return height;
  }

  /**
   * Set indicator state
   *
   * @param {number} top - Top value
   * @param {number} height - Height value
   * @return {void}
   */

  setIndicatorState = (top, height) => {
    log.output('setIndicatorState', true);

    this.setState(() => ({
      indicator: {
        transform: `translateX(0) translateY(${top}px)`,
        height,
      },
    }));
  }

  /**
   * Set document
   *
   * @return {void}
   */

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

  /**
   * Handle scroll
   *
   * @return {void}
   */

  handleScroll = () => {
    log.output('handleScroll', true);

    this.setDoc();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  /**
   * Handle touch and move
   *
   * @return {void}
   */

  handleTouchMove = () => {
    log.output('handleTouchMove', true);

    this.setDoc();
    const { indicator } = this.state;
    this.setIndicatorState(this.getIndicatorTop(), indicator.height);
  }

  /**
   * Handle resize
   *
   * @return {void}
   */

  handleResize = () => {
    log.output('handleResize', true);

    this.setDoc();
    this.setIndicatorState(this.getIndicatorTop(), this.getIndicatorHeight());
  }

  /**
   * Render
   *
   * @return {object} React component instance
   */

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
