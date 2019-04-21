import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

// TODO:
// - debounce
// - optimize logic
// - styles (perhaps transform for cleaner scroll)
// - on drag

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // Setting default properties

    // this.document = {
    //   node: null,
    //   heights: {
    //     client: 0,
    //     scroll: 0,
    //   }
    // }

    this.indicator = { height: 0, top: 0 };

    // Setting default properties for state
    this.state = {
      indicator: { height: 0, top: 0 },
    };
  }

  componentDidMount() {
    // TODO: try to work rather with refs to avoid timeout
    setTimeout(() => {
      this.getDocument();
      this.setIndicatorState(this.setIndicatorTop(), this.setIndicatorHeight());

      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleResize);
  }

  setIndicatorTop = () => {
    // console.log('--- Setting position');

    // console.log(document.documentElement.scrollHeight, document.documentElement.clientHeight);
    // console.log(this.document.scroll.height, this.document.client.height);

    const height = this.document.scroll.height - this.document.client.height;
    const scrollPosition = height ? (this.document.scroll.top / height) : 0;
    const top = scrollPosition * (this.document.scroll.height - this.indicator.height);

    return top;
    // const indicator = {...this.state.indicator};
    // indicator.top = parseInt(top, 10);
    // this.setState({indicator});
  }

  setIndicatorHeight = () => {
    // console.log('--- Setting height');

    const height = (this.document.client.height / this.document.scroll.height) * this.document.client.height; // eslint-disable-line max-len
    this.indicator.height = parseInt(height, 10);

    // console.log('Calculated height', this.indicator.height);
  }

  setIndicatorState = (top, height) => {
    const state = { ...this.state };

    state.indicator.top = top;
    state.indicator.height = height;

    this.setState({ state });
  }

  getDocument = () => {
    const nodeDocument = document.documentElement;

    this.document = {
      node: nodeDocument,
      client: {
        height: nodeDocument.clientHeight,
      },
      scroll: {
        height: nodeDocument.scrollHeight,
        top: nodeDocument.scrollTop,
      },
    };
  }

  handleScroll = () => {
    // console.log('scrolling');
    this.getDocument();
    this.setIndicatorState(this.setIndicatorTop(), this.indicator.height);
  }

  handleResize = () => {
    // console.log('resizing');
    this.getDocument();
    this.setIndicatorState(this.setIndicatorTop(), this.setIndicatorHeight());
  }

  render() {
    const state = { ...this.state };
    const classNames = new BEMHelper('sidebar');

    return (
      <div {...classNames()}>
        <div {...classNames('indicator')} style={state.indicator} />
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
