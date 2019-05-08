import React from 'react';
import BEMHelper from 'react-bem-helper';
import FetchApiGitHub from '../fetch-api-git-hub/FetchApiGitHub';

function Footer() {
  const classNames = new BEMHelper('footer');
  const yearCurrent = new Date().getFullYear();

  return (
    <footer {...classNames('', '', 'text-center')}>
      <p>Business owner information: Žiga Vukčevič s.p., Tržaška 121, 1000 Ljubljana, Slovenia</p>
      <p>VAT Nr.: SI86291459, Registration Nr.: 6531164000, IBAN: SI56 6100 0000 6613 419, BIC: HDELSI22</p> {/* eslint-disable-line max-len */}
      <p>
        <small>Copyright 2015-{yearCurrent} © be-codified.com</small><br />
      </p>
      <p>
        <small><FetchApiGitHub /></small>
      </p>
    </footer>
  );
}

export default Footer;
