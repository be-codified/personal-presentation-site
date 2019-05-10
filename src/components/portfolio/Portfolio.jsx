import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import BEMHelper from 'react-bem-helper';

function Portfolio(props) {
  const {
    tags, heading, desc, link, client, type, images,
  } = props;
  const classNames = new BEMHelper('portfolio');

  return (
    <div {...classNames()}>
      <span>{heading.pre}</span>
      <h2 dangerouslySetInnerHTML={{ __html: heading.main }} />
      <p>{desc}</p>
      <span>Technologies used: </span>
      <ul {...classNames('tags-list', '', 'list-no-style-type list-inline-block')}>
        {tags.map(tag => (
          <li {...classNames('tags-item', '', 'text-uppercase')} key={shortid.generate()}>
            <small>{tag}</small>
          </li>
        ))}
      </ul>
      <p>
        See it&nbsp;
        <a
          href={link.href}
          title={link.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.text}.
        </a>
      </p>
      <p>Client: {client} / {type}</p>
      {images.map(image => (
        <img
          key={shortid.generate()}
          src={image.src}
          srcSet={image.srcSet}
          alt={image.alt}
        />
      ))}
    </div>
  );
}

Portfolio.propTypes = {
  heading: PropTypes.PropTypes.shape({
    pre: PropTypes.string.isRequired,
    main: PropTypes.string.isRequired,
  }).isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  client: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Portfolio;
