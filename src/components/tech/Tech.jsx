import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
// import shortid from 'shortid';
// import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';
import Navigation from '../navigation/Navigation';

class Tech extends Component {
  constructor(props) {
    super(props);
    this.refTech = React.createRef();
  }

  selectAnchor = (hash) => {
    // Method called from child component to be able to select anchor
    const nodeAnchor = this.refTech.current.querySelector(hash);
    return nodeAnchor;
  }

  render() {
    const { navigation, children } = this.props;
    const classNames = new BEMHelper('tech');

    return (
      <div
        ref={this.refTech}
        {...classNames('', '', 'space-padding-large')}
      >
        <Navigation items={navigation.items} />
        <div {...classNames('content')}>
          {children}
        </div>
      </div>
    );
  }
}

Tech.propTypes = {
  navigation: PropTypes.PropTypes.shape({
    section: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Tech;
