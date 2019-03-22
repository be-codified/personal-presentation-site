import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Accordion extends Component {
  someFunction = () => {
    // TODO: something
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        {
          /* For each item */
          children.map(item => (
            <React.Fragment key={shortid.generate()}>
              {/* TODO: get tag instead of h1 */}
              <h1 className="accordion__header">
                <button type="button">
                  {item.props.children[0].props.children}
                </button>
              </h1>
              <div className="accordion__content">
                {item.props.children[1].props.children}
              </div>
            </React.Fragment>
          ))
        }
      </div>
    );
  }
}

Accordion.propTypes = {
  // TODO: lock this with child properties
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Accordion;
