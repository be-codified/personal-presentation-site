import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import BEMHelper from 'react-bem-helper';

class Portfolio extends Component {
  someMethod = () => {

  }

  render() {
    const props = { ...this.props };
    const classNames = new BEMHelper('portfolio');

    /* TODO: Any better way to code indenting and no linter issues? */
    const tags = <ul {...classNames('tags-list', '', 'list-no-style-type list-inline-block')}>{props.tags.map(tag => <li {...classNames('tags-item', '', 'text-uppercase')} key={shortid.generate()}>{tag}</li>)}</ul>;

    return (
      <div {...classNames()}>
        <span>{props.heading.intro}</span>
        <h2>{props.heading.main}</h2>
        <p>{props.desc}</p>
        <span>Technologies used: </span>{tags}
        <p>
          See it live at <a href={props.link.href} title={props.link.title}>{props.link.text}.</a>
        </p>
        <p>Client: {props.client}</p>
        <img src={props.image.src} srcSet={props.image.srcSet} alt={props.image.alt} />
      </div>
    );
  }
}

Portfolio.propTypes = {
  heading: PropTypes.PropTypes.shape({
    intro: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
  }).isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  client: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Portfolio;
