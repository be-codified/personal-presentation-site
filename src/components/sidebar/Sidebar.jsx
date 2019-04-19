import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

// TODO: debounce

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.nodes = { body: null, html: null };
    this.indicator = { height: 0, top: 0 };

    // Setting default properties for state
    this.state = {
      indicator: { height: 0, top: 0 },
    };
  }

  setIndicatorPosition = () => {
    console.log('Setting position');
    this.indicator.top = 200;
  }

  setIndicatorHeight = () => {
    console.log('Setting height');

    const heightIndicator = parseInt((this.nodes.html.clientHeight / this.nodes.body.scrollHeight) * this.nodes.html.clientHeight, 10);

    console.log('Calculated height', heightIndicator);

    this.indicator.height = heightIndicator;
  }

  getHtmlAndBodyNodes = () => {
    this.nodes.html = document.documentElement;
    this.nodes.body = document.body;

    // console.log(this.nodes.body.scrollHeight, this.nodes.body.offsetHeight, this.nodes.html.clientHeight, this.nodes.html.scrollHeight, this.nodes.html.offsetHeight, document.documentElement.getBoundingClientRect().height);
  }

  handleScroll = (event) => {
    console.log('scrolling');
    const indicator = {...this.state.indicator};

    indicator.top = indicator.top + 10;

    console.log(indicator.top);
    this.setState({indicator});
  }

  componentDidMount() {
    this.getHtmlAndBodyNodes();
    this.setIndicatorHeight();
    this.setIndicatorPosition();

    const indicator = {...this.state.indicator};

    indicator.height = this.indicator.height;
    indicator.top = this.indicator.top;

    this.setState({indicator});
    window.addEventListener('scroll', this.handleScroll);
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
