import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollToAnchorLink from '../scroll-to-anchor-link/ScrollToAnchorLink';
import shortid from 'shortid';

class HowWasMade extends Component {
  constructor(props) {
    super(props);
    this.test = React.createRef();
  }

  render() {
    const { sidebar, children } = this.props;
    const className = 'check-list';

    // const ref = React.createRef();
    // console.log(this.props.children);

    // const test = React.forwardRef((props, ref) => ref);
    // const test = React.createRef((props, ref) => this.ref);

    // console.log(test.render());

    return (
      <div className={`${className} space-padding-large`}>
        <ul className={`${className}__sidebar list-no-style-type`}>
          <li>
            <ScrollToAnchorLink href="#some-section-test-1" innerRef={this.test}>
              Test 1
            </ScrollToAnchorLink>
          </li>
          <li>
            <ScrollToAnchorLink href="#some-section-test-2" targetOffset="100">
              Test 2
            </ScrollToAnchorLink>
          </li>

          {/* {
            sidebar.items.map(item => (
              <li key={shortid.generate()}>
              </li>
            ))
          } */}
        </ul>
        <div className={`${className}__content`}>
          {children}
        </div>
      </div>
    );
  }
}

HowWasMade.propTypes = {
  sidebar: PropTypes.PropTypes.shape({
    section: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        heading: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default HowWasMade;
