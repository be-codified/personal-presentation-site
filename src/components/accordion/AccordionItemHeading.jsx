import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class AccordionItemHeading extends Component {
  handleClick = () => {
    console.log('>>> clicked');
  }

  render() {
    const { children } = this.props;

    return (
      <h1 className="accordion__heading">
        <button type="button" onClick={this.handleClick}>
          {children}
        </button>
      </h1>
    );
  }
}

AccordionItemHeading.propTypes = {
  // TODO: lock this with child properties
  // children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AccordionItemHeading;
