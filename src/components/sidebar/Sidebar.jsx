import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

// TODO:
// - debounce
// - styles (perhaps transform for cleaner scroll)
// - on drag

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.document = {
      node: null,
      heights: {
        client: 0,
        scroll: 0,
      }
    }

    this.indicator = { height: 0, top: 0 };

    // Setting default properties for state
    this.state = {
      indicator: { height: 0, top: 0 },
    };
  }

  setIndicatorPosition = () => {
    console.log('---');
    console.log('Setting position');

    console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight);
    console.log(this.document.heights.scroll, this.document.heights.client);

    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = height !== 0 ? (document.documentElement.scrollTop / height) : 0;

    const distance = parseInt(scrolled * (document.documentElement.scrollHeight - this.indicator.height), 10);

    const indicator = {...this.state.indicator};
    indicator.top = distance;
    this.setState({indicator});
  }

  setIndicatorHeight = () => {
    console.log('Setting height');

    const heightIndicator = parseInt((this.document.heights.client / this.document.heights.scroll) * this.document.heights.client, 10);
    console.log('Calculated height', heightIndicator);

    this.indicator.height = heightIndicator;
  }

  getDocument = () => {
    // document.documentElement.scrollHeight, document.documentElement.clientHeight

    const nodeDocument = document.documentElement;

    this.document = {
      node: nodeDocument,
      heights: {
        client: nodeDocument.clientHeight,
        scroll: nodeDocument.scrollHeight,
      }
    }

    console.log('here', document.documentElement.scrollHeight);
  }

  handleScroll = (event) => {
    console.log('scrolling');
    this.setIndicatorPosition();
  }

  componentDidMount() {
    // TODO: try to work rather with refs to avoid timeout
    setTimeout(() => {
      this.getDocument();
      this.setIndicatorHeight();
      this.setIndicatorPosition();

      const indicator = {...this.state.indicator};

      indicator.height = this.indicator.height;
      indicator.top = this.indicator.top;

      this.setState({indicator});
      window.addEventListener('scroll', this.handleScroll);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const classNames = new BEMHelper('sidebar');

    return (
      <div {...classNames()}>
        <div {...classNames('indicator')} style={this.state.indicator}></div>
      </div>
    );
  }
}

// Sidebar.defaultProps = {
//   somePropName: 'someValue',
// };

// Sidebar.propTypes = {
//   somePropName: PropTypes.string.isRequired,
// };

export default Sidebar;
