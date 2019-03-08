import React, { Component } from 'react';

class FrontEndCheckList extends Component {
  render() {
    return (<div>
      <a href="https://frontendchecklist.io/">https://frontendchecklist.io/</a>
      {
        /* For each segment */
        this.props.data.map((segment) => {
          return (
            <React.Fragment>
              {/* Outputting heading */}
              <h2>{segment.heading}</h2>
              {
                /* For each list item */
                segment.list.map((item) => {
                  const status = item.checked
                    ? <input type="checkbox" checked disabled />
                    : <input type="checkbox" disabled />;

                  return (
                    <React.Fragment>
                      {/* Outputting status, type, description and tags */}
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

export default FrontEndCheckList;
