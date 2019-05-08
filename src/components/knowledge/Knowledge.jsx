import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

function Knowledge(props) {
  const { heading, children } = props;
  const classNames = new BEMHelper('knowledge');

  return (
    <div {...classNames()}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}

Knowledge.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Knowledge;
