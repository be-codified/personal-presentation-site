import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import Navigation from '../navigation/Navigation';

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
    const classNames = new BEMHelper('check-list');

    return (
      <div {...classNames('', '', 'space-padding-bottom-xlarge')}>
        <Navigation items={data} />
        {
          /* For each segment */
          data.map(segment => (
            <React.Fragment key={shortid.generate()}>
              {/* Heading */}
              <h2 id={segment.id}>{segment.heading}</h2>
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
  // TODO: lock this with child properties
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CheckList;
