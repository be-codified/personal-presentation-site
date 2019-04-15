import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { sidebar, children } = this.props;
    const className = 'check-list';

    return (
      <div
        ref={this.refTech}
        className={`${className} space-padding-large`}
      >
        <ul className={`${className}__sidebar list-no-style-type`}>
          {
            sidebar.items.map(item => (
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
        <div className={`${className}__content`}>
          {children}
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
