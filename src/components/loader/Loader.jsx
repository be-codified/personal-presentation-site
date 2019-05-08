import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

/*
  TODO:
    - use timeMin from FetchApiGitHub
*/

function Loader(props) {
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
