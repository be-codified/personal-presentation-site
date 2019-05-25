import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.drawer);

/**
  TODO:
    - use rather bem helper to pass classes on state change
    - check if react has some simple is hidden method
    - perhaps create state with just visibility booleans and classes in render
 */

/**
 * Class representing drawer.
 * @extends Component
 */

class Drawer extends Component {
  constructor(props) {
    /**
     * Create drawer
     * @param {object} props - Props object
     */

    super(props);
    this.ref = React.createRef();

    // Setting default properties
    this.state = {
      isOpened: props.isOpened,
    };

    // this.state = {
    //   drawer: 'drawer',
    //   actions: {
    //     open: 'drawer__open',
    //     close: 'drawer__close drawer__close--hidden',
    //   },
    //   navigation: 'drawer__navigation drawer__navigation--hidden',
    // };
  }

  /**
   * Component did mount
   * @return {void}
   */

  componentDidMount = () => {
    log.output('componentDidMount', true);
  }

  // TODO: documentation

  static getDerivedStateFromProps(nextProps) {
    // this.log('getDerivedStateFromProps', true);
    return {
      isOpened: nextProps.isOpened,
    };
  }

  /**
   * Handle close
   * @return {void}
   */

  handleClose = () => {
    log.output('handleClose', true);

    /*
    this.setState({ isOpened: false }, function () {
      console.log(this.state.isOpened);
    });
    */
  }

  /**
   * Render
   * @return {object} React component instance
   */

  render() {
    log.output('render', true);

    const { children } = this.props;
    const state = { ...this.state };
    const classNames = new BEMHelper('drawer');

    return (
      <div {...classNames('', state.isOpened && 'opened')}>
        {/* <button
          type="button"
          onClick={this.handleClose}
        >
          Close
        </button> */}
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.defaultProps = {
  isOpened: false,
};

Drawer.propTypes = {
  // test: PropTypes.bool.isRequired,
  isOpened: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Drawer;
