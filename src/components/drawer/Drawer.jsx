import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.drawer);

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
      isFixedForTabletAndBelow: props.isFixedForTabletAndBelow,
    };
  }

  static getDerivedStateFromProps(props, state) {
    log.output('getDerivedStateFromProps', true);

    if (props.isFixedForTabletAndBelow !== state.isFixedForTabletAndBelow) {
      return {
        isFixedForTabletAndBelow: props.isFixedForTabletAndBelow,
      };
    }
    return null;
  }

  /**
   * Handle close
   *
   * @return {void}
   */

  handleClose = () => {
    log.output('handleClose', true);

    const props = { ...this.props };
    props.toggleDrawer();
  }

  /**
   * Render
   *
   * @return {object} React component instance
   */

  render() {
    log.output('render', true);

    const { children } = this.props;
    const state = { ...this.state };
    const classNames = new BEMHelper('drawer');

    return (
      <div {...classNames('', state.isFixedForTabletAndBelow && 'fixed-for-tablet-and-below')}>
        <button
          type="button"
          onClick={this.handleClose}
          {...classNames('button-close', '', 'button')}
        >
          Close navigation
        </button>
        <div>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  isFixedForTabletAndBelow: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Drawer;
