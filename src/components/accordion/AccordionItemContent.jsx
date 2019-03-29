import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class AccordionItemContent extends Component {
  someFunction = () => {
    // TODO: something
  }

  render() {
    const { children, isCollapsed } = this.props;

    return (
      <div
        className="accordion__content"
        style={{ display: isCollapsed ? 'block' : 'none' }}
      >
        {children}
      </div>
    );
  }
}

AccordionItemContent.propTypes = {
  // TODO: lock this with child properties
  // children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccordionItemContent;
