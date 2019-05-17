import React from 'react';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import Link from '../link/Link';
import sections from '../navigation/data/sections';
import clientsData from './data/clients';

function Clients() {
  const classNames = new BEMHelper('clients');

  return (
    <div {...classNames('')}>
      <h2 id={sections.clients}>Clients</h2>
      <ul className="list-no-style-type list-inline-block">
        {
          clientsData.map(client => (
            <li key={shortid.generate()}>
              <Link href={client.link.href} title={client.link.title} isOuter>
                <img
                  src={client.image.src}
                  srcSet={client.image.srcSet}
                  alt={client.image.alt}
                />
              </Link>
            </li>
          ))
        }
      </ul>
      <p>Country map of clients</p>
    </div>
  );
}

export default Clients;
