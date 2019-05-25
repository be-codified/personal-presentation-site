import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
// import Navigation from '../navigation/Navigation';

/**
 * Class representing check list.
 * @extends Component
 */

class CheckList extends Component {
  /**
   * Calculate progress
   * @param {array} items - Array of items
   * @return {string} Progress, e.g. `2/10 (20%)`
   */

  calculateProgress = (items) => {
    const total = items.length;

    let counter = 0;
    items.forEach((item) => {
      if (item.checked) {
        counter += 1;
      }
    });

    const percentage = Math.round(counter / total * 100);

    return `${counter}/${total} (${percentage}%)`;
  }

  /**
   * Render
   * @return {object} React component instance
   */

  render() {
    const { data } = this.props;
    const classNames = new BEMHelper('check-list');

    return (
      <div {...classNames('', '', 'space-padding-bottom-xlarge')}>
        <h2>Check list</h2>
        {/* <Navigation items={data} /> */}
        {
          /* For each segment */
          data.map(segment => (
            <React.Fragment key={shortid.generate()}>
              {/* Heading */}
              <h3 id={segment.id}>{segment.text}</h3>
              {/* Progress */}
              <p>Progress: {this.calculateProgress(segment.list)}</p>
              <ul className="list-no-style-type">
                {
                  /* For each list item */
                  segment.list.map((item) => {
                    const status = item.checked
                      ? <input type="checkbox" checked disabled />
                      : <input type="checkbox" disabled />;

                    let tags;

                    if (item.tags) {
                      tags = (
                        <ul {...classNames('tags-list', '', 'list-no-style-type list-inline-block')}>    {item.tags.map(tag => (
                          <li
                            {...classNames('tags-item', '', 'text-uppercase')}
                            key={shortid.generate()}
                          >
                            <small>{tag}</small>
                          </li>
                        ))}
                        </ul>
                      );
                    }

                    return (
                      <li key={shortid.generate()}>
                        {/* Status, type, description and tags */}
                        <p>{status} {item.type}: {item.description}</p>
                        {tags}
                      </li>
                    );
                  })
                }
              </ul>
            </React.Fragment>
          ))
        }
      </div>
    );
  }
}

CheckList.propTypes = {
  /**
    TODO:
      - lock this with child properties
  */
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckList;
