import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';


class FrontEndCheckList extends Component {
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

    return (
      <div>
        <a href="https://frontendchecklist.io/">https://frontendchecklist.io/</a>
        {
          /* For each segment */
          data.map(segment => (
            <React.Fragment key={shortid.generate()}>
              {/* Heading */}
              <h2>{segment.heading}</h2>
              {/* Progress */}
              <p>Progress: {this.calculateProgress(segment.list)}</p>
              {
                /* For each list item */
                segment.list.map((item) => {
                  const status = item.checked
                    ? <input type="checkbox" checked disabled />
                    : <input type="checkbox" disabled />;

                  return (
                    <React.Fragment key={shortid.generate()}>
                      {/* Status, type, description and tags */}
                      <p>{status} {item.type}: {item.description}<br />
                        <small>{item.tags.join(', ')}</small>
                      </p>
                    </React.Fragment>
                  );
                })
              }
            </React.Fragment>
          ))
        }
      </div>
    );
  }
}

FrontEndCheckList.propTypes = {
  // TODO: lock this with child properties
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FrontEndCheckList;
