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
      isFixed: props.isFixed,
    };
  }

  static getDerivedStateFromProps(props, state) {
    log.output('getDerivedStateFromProps', true);

    if (props.isFixed !== state.isFixed) {
      return {
        isFixed: props.isFixed,
      };
    }
    return null;
  }

  /**
   * Handle close
   * @return {void}
   */

  handleClose = () => {
    log.output('handleClose', true);

    const props = { ...this.props };
    props.toggleDrawer();
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
      <div {...classNames('', state.isFixed && 'fixed')}>
        <button
          type="button"
          onClick={this.handleClose}
          {...classNames('button-close')}
        >
          Close mobile navigation
        </button>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  isFixed: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Drawer;
