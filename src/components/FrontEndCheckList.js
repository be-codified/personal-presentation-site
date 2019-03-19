import React, { Component } from 'react';
import PropTypes from 'prop-types';
class FrontEndCheckList extends Component {
  calculateProgress(items) {
    const total = items.length;

    let counter = 0;
    items.forEach((item) => {
      if (item.checked) {
        counter = counter + 1;
      }
    });

    const procentage = Math.round(counter / total * 100);

    return `${counter}/${total} (${procentage}%)`;
  }

  render() {
    return (<div>
      <a href="https://frontendchecklist.io/">https://frontendchecklist.io/</a>
      {
        /* For each segment */
        this.props.data.map((segment, index) => {
          return (
            <React.Fragment key={index}>
              {/* Heading */}
              <h2>{segment.heading}</h2>
              {/* Progress */}
              <p>Progress: {this.calculateProgress(segment.list)}</p>
              {
                /* For each list item */
                segment.list.map((item, index) => {
                  const status = item.checked
                    ? <input type="checkbox" checked disabled />
                    : <input type="checkbox" disabled />;

                  return (
                    <React.Fragment key={index}>
                      {/* Status, type, description and tags */}
                      <p>{status} {item.type}: {item.description}<br />
                        <small>{item.tags.join(', ')}</small>
                      </p>
                    </React.Fragment>
                  )
                })
              }
            </React.Fragment>
          )
        }
      )}
    </div>)
  }
}

FrontEndCheckList.propTypes = {
  data: PropTypes.array
};

export default FrontEndCheckList;
