import React from 'react';
import BEMHelper from 'react-bem-helper';
import shortid from 'shortid';
import { Chart } from 'react-google-charts';
import Link from '../link/Link';
import sections from '../navigation/data/sections';
import clientsData from './data/clients';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.clients);

function Clients() {
  log.output('render', true);

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
      <div
        {...classNames('map')}
      >
        <Chart
          width="500px"
          height="300px"
          chartType="GeoChart"
          data={[
            ['Country', 'Popularity'],
            ['Slovenia', 500],
          ]}
          mapsApiKey="AIzaSyCKPN5dXqRL4CwY9n5TrU_7GdDOudJXyMo"
          rootProps={{ 'data-testid': '1' }}
          chartEvents={[
            {
              eventName: 'ready',
              callback: ({ chartWrapper }) => {
                // console.log('I am ready');
                // console.log(chartWrapper);
                chartWrapper.visualization.container.style.width = 200; // eslint-disable-line  no-param-reassign, max-len
                /*
                chartWrapper.visualization.arrayToDataTable([
                  ['City',   'Population', 'Area'],
                  ['Rome',      2761477,    1285.31],
                  ['Milan',     1324110,    181.76],
                  ['Naples',    959574,     117.27],
                  ['Turin',     907563,     130.17],
                  ['Palermo',   655875,     158.9],
                  ['Genoa',     607906,     243.60],
                  ['Bologna',   380181,     140.7],
                  ['Florence',  371282,     102.41],
                  ['Fiumicino', 67370,      213.44],
                  ['Anzio',     52192,      43.43],
                  ['Ciampino',  38262,      11]
                ]);
                */
              },
            },
          ]}
          options={{
            // sizeAxis: { minValue: 0, maxValue: 100 },
            region: '155', // Western Europe
            displayMode: 'markers',
            // colorAxis: {colors: ['#e7711c', '#4374e0']} // orange to blue
          }}
        />
      </div>
    </div>
  );
}

export default Clients;
