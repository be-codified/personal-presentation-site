import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import ScrollToAnchor from '../scroll-to-anchor/ScrollToAnchor';

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
    const props = { ...this.props };
    const classNames = new BEMHelper('tech');

    return (
      <div
        ref={this.refTech}
        {...classNames('', '', 'space-padding-large')}
      >
        <ul {...classNames('sidebar', '', 'list-no-style-type')}>
          {
            props.sidebar.items.map(item => (
              <li key={shortid.generate()}>
                <ScrollToAnchor
                  href={`#${item.id}`}
                  selectAnchor={this.selectAnchor}
                  offset={10}
                >
                  {item.text}
                </ScrollToAnchor>
              </li>
            ))
          }
        </ul>
        <div {...classNames('content')}>
          {props.children}
        </div>
      </div>
    );
  }
}

Tech.propTypes = {
  sidebar: PropTypes.PropTypes.shape({
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
