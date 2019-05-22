import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

/* TODO
  - use rather bem helper to pass classes on state change
  - check if react has some simple is hidden method
  - perhaps create state with just visibility booleans and classes in render
*/

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();

    // Setting default properties
    this.state = {
      drawer: 'drawer',
      actions: {
        open: 'drawer__open',
        close: 'drawer__close drawer__close--hidden',
      },
      navigation: 'drawer__navigation drawer__navigation--hidden',
    };
  }

  handleClose = () => {
    this.setState(() => ({
      drawer: 'drawer drawer',
      actions: {
        open: 'drawer__open',
        close: 'drawer__close drawer__close--hidden',
      },
      navigation: 'drawer__navigation drawer__navigation--hidden',
    }));
  }

  handleOpen = () => {
    this.setState(() => ({
      drawer: 'drawer drawer--opened',
      actions: {
        open: 'drawer__open drawer__open--hidden',
        close: 'drawer__close',
      },
      navigation: 'drawer__navigation',
    }));
  }

  render() {
    const { children } = this.props;
    const state = { ...this.state };
    const classNames = new BEMHelper('drawer');

    return (
      <div className={state.drawer}>
        <div {...classNames('actions')}>
          <button
            type="button"
            className={state.actions.open}
            onClick={this.handleOpen}
          >
            Open
          </button>
          <button
            type="button"
            className={state.actions.close}
            onClick={this.handleClose}
          >
            Close
          </button>
        </div>
        <div className={state.navigation}>
          {children}
        </div>
      </div>
    );
  }
}

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Drawer;
