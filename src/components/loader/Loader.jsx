import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Log from '../../helpers/log';

const logOutput = false;
const log = new Log('Loader', logOutput);
/*
  TODO:
    - use timeMin from FetchApiGitHub
*/

function Loader(props) {
  log.output('render', true);

  const { type } = props;

  const classNames = new BEMHelper('loader');
  let loaderType;

  if (type === 'ellipsis') {
    loaderType = (
      <span {...classNames('inner', 'ellipsis')}>
        <div /><div /><div /><div />
      </span>
    );
  } else if (type === 'ring') {
    loaderType = (
      <span {...classNames('inner', 'ring')} />
    );
  }

  return (
    <span {...classNames('')}>
      {loaderType}
    </span>
  );
}

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
