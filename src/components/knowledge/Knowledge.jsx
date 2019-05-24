import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Log from '../../helpers/log';

const logOutput = false;
const log = new Log('Knowledge', logOutput);

function Knowledge(props) {
  log.output('render', true);

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
