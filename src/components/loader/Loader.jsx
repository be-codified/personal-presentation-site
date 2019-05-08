import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

/*
  TODO:
    - use timeMin from FetchApiGitHub
*/

class Loader extends Component {
  someMethod = () => {}

  render() {
    const { type } = this.props;

    const classNames = new BEMHelper('loader');
    let loaderType;

    if (type === 'ellipsis') {
      loaderType = (
        <div {...classNames('inner', 'ellipsis')}>
          <div /><div /><div /><div />
        </div>
      );
    } else if (type === 'ring') {
      loaderType = (
        <div {...classNames('inner', 'ring')} />
      );
    }

    return (
      <div {...classNames('')}>
        {loaderType}
      </div>
    );
  }
}

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
