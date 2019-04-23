import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import BEMHelper from 'react-bem-helper';

class Portfolio extends Component {
  someMethod = () => {

  }

  render() {
    const {
      tags, heading, desc, link, client, image,
    } = this.props;
    const classNames = new BEMHelper('portfolio');

    /* TODO: Any better way to code indenting and no linter issues? */
    const tagsNode = <ul {...classNames('tags-list', '', 'list-no-style-type list-inline-block')}>{tags.map(tag => <li {...classNames('tags-item', '', 'text-uppercase')} key={shortid.generate()}>{tag}</li>)}</ul>;

    return (
      <div {...classNames()}>
        <span>{heading.intro}</span>
        <h2>{heading.main}</h2>
        <p>{desc}</p>
        <span>Technologies used: </span>{tagsNode}
        <p>
          See it live at <a href={link.href} title={link.title}>{link.text}.</a>
        </p>
        <p>Client: {client}</p>
        <img src={image.src} srcSet={image.srcSet} alt={image.alt} />
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
