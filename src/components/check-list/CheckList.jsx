import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

class CheckList extends Component {
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

  render() {
    const { data } = this.props;
    const className = 'check-list';

    return (
      <div className={`${className} space-padding-bottom-xlarge`}>
        {
          /* For each segment */
          data.map(segment => (
            <React.Fragment key={shortid.generate()}>
              {/* Heading */}
              <h2 id={segment.id}>{segment.heading}</h2>
              {/* Progress */}
              <p>Progress: {this.calculateProgress(segment.list)}</p>
              <ul>
                {
                  /* For each list item */
                  segment.list.map((item) => {
                    const status = item.checked
                      ? <input type="checkbox" checked disabled />
                      : <input type="checkbox" disabled />;

                    const tags = item.tags
                      ? <small><br />{item.tags.join(', ')}</small>
                      : null;

                    return (
                      <li key={shortid.generate()}>
                        {/* Status, type, description and tags */}
                        <p>{status} {item.type}: {item.description} {tags}</p>
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
  // TODO: lock this with child properties
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckList;
