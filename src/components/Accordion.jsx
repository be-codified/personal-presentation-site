import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class Accordion extends Component {
  someFunction = () => {
    // TODO: something
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        {
          /* For each segment */
          data.items.map(item => (
            <React.Fragment key={shortid.generate()}>
              <h3 className="handorgel__header">
                <button className="handorgel__header__button">
                  {item.heading.text}
                </button>
              </h3>
              <div className="handorgel__content">
                <div className="handorgel__content__inner">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
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
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Accordion;
