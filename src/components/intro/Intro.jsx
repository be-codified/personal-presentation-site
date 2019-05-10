import React, { Component } from 'react';
import numWords from 'num-words';

const dateToday = new Date();

class Intro extends Component {
  constructor(props) {
    super(props);

    // Setting period starting dates
    this.datesStart = {
      webIndustry: new Date('2007-06-01'),
      programming: new Date('2012-01-01'),
      freelancing: new Date('2013-01-01'),
    };
  }

  calculatePeriod = (dateStart, useWords = false) => {
    // Calculate period in years
    const periodInt = Math.round(new Date(dateToday - dateStart) / 1000 / 60 / 60 / 24 / 365);

    // Set period based on int or string
    const period = useWords ? numWords(periodInt) : periodInt;

    return period;
  }

  render() {
    return (
      <div>
        <img
          src="https://via.placeholder.com/150x75.jpg?text=LOGO"
          srcSet="https://via.placeholder.com/150x75.jpg?text=LOGO 1x, https://via.placeholder.com/300x150.jpg?text=LOGO 2x"
          alt="Logo"
        />

        <hr />

        <h1>Hi,<br />my name is Žiga and I&apos;m a front-end web developer.</h1>
        <p>I have been working in the web industry for the past {this.calculatePeriod(this.datesStart.webIndustry)} years, for the last {this.calculatePeriod(this.datesStart.freelancing, true)} years as a freelancer.</p> {/* eslint-disable-line max-len */}

        <div>
          <p>
            <strong>
              {this.calculatePeriod(this.datesStart.webIndustry)}+
            </strong> years in the web industry
          </p>
          <p>
            <strong>
              {this.calculatePeriod(this.datesStart.programming)}+
            </strong> years of active programming
          </p>
          <p>
            <strong>
              2+
            </strong> cups of coffee drank today
          </p>
        </div>

        <img
          src="https://via.placeholder.com/300x300.jpg?text=INTRO+IMAGE"
          srcSet="https://via.placeholder.com/300x300.jpg?text=INTRO+IMAGE 1x, https://via.placeholder.com/600x600.jpg?text=INTRO+IMAGE 2x"
          alt="Intro"
        />
      </div>
    );
  }
}

export default Intro;
