import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

function Knowledge(props) {
  const { heading, id, children } = props;
  const classNames = new BEMHelper('knowledge');

  return (
    <div {...classNames()}>
      <h2 id={id}>{heading}</h2>
      {children}
    </div>
  );
}

Knowledge.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Knowledge;
