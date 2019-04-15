import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Knowledge extends Component {
  constructor(props) {
    super(props);
    this.test = 'knowledge';
  }

  someMethod = () => {

  }

  render() {
    const { heading, children } = this.props;
    const className = 'knowledge';

    return (
      <div className={className}>
        <h2>{heading}</h2>
        {children}
      </div>
    );
  }
}

Knowledge.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Knowledge;
