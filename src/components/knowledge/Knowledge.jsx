import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.test = 'knowledge';
  }

  someMethod = () => {

  }

  render() {
    const props = { ...this.props };
    const classNames = new BEMHelper('knowledge');

    return (
      <div {...classNames()}>
        <h2>{props.heading}</h2>
        {props.children}
      </div>
    );
  }
}

Knowledge.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Knowledge;
