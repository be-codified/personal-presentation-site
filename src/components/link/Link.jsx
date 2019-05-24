import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Log from '../../helpers/log';

const logOutput = false;
const log = new Log('Link', logOutput);

function Link(props) {
  log.output('render', true);

  const {
    href, title, isOuter, children,
  } = props;

  const classNames = new BEMHelper('link');

  const target = isOuter ? '_blank' : null;
  const rel = isOuter ? 'noopener noreferrer' : null;

  return (
    <a href={href} title={title} target={target} rel={rel} {...classNames('')}>
      <span>{children}</span>
    </a>
  );
}

Link.defaultProps = {
  isOuter: false,
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isOuter: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default Link;
