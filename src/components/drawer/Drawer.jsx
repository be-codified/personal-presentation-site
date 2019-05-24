import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Log from '../../helpers/log';

const logOutput = true;
const log = new Log('Drawer', logOutput);

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

  componentDidMount = () => {
    log.output('componentDidMount', true);
  }

  static getDerivedStateFromProps(nextProps) {
    // this.log('getDerivedStateFromProps', true);
    return {
      isOpened: nextProps.isOpened,
    };
  }

  handleClose = () => {
    log.output('handleClose', true);

    /*
    this.setState({ isOpened: false }, function () {
      console.log(this.state.isOpened);
    });
    */
  }

  render() {
    log.output('render', true);

    const { children } = this.props;
    const state = { ...this.state };
    const classNames = new BEMHelper('drawer');

    return (
      <div {...classNames('', state.isOpened && 'opened')}>
        <button
          type="button"
          onClick={this.handleClose}
        >
          Close
        </button>
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
