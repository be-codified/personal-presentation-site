import React, { Component } from 'react';
import Loader from '../loader/Loader';

const fetchApiUrl = 'https://api.github.com/repos/be-codified/personal-presentation-site';
class FetchApiGitHub extends Component {
  constructor(props) {
    super(props);

    // Setting default properties
    this.state = {
      isLoading: true,
      data: null,
    };
  }

  componentDidMount = () => {
    // Set minimum time to loader to be able
    // to show, if fetch response from Api is really quick
    const timeMin = 500;

    setTimeout(() => {
      const mapper = {
        latestPushAt: 'pushed_at',
      };

      fetch(fetchApiUrl)
        .then(response => response.json())
        .then(
          (response) => {
            let data;

            // If getting error message
            if (response.message) {
              data = 'Could not fetch data from GitHub Api.';
            // Else format response date and time
            } else {
              data = this.formatDateAndTime(response[mapper.latestPushAt]);
            }

            this.setState(() => ({
              isLoading: false,
              data,
            }));
          },
          (error) => {
            this.setState(() => ({
              isLoading: false,
              data: error,
            }));
          },
        );
    }, timeMin);
  }

  formatDateAndTime = (string) => {
    function addLeadingZero(int) {
      return (int < 10 ? '0' : '') + int;
    }

    const date = new Date(string);
    const formatted = {
      date: {
        day: addLeadingZero(date.getDate()),
        month: addLeadingZero(date.getMonth() + 1),
        year: date.getFullYear(),
      },
      time: {
        hour: addLeadingZero(date.getHours()),
        minute: addLeadingZero(date.getMinutes()),
      },
    };

    return `${formatted.date.day}.${formatted.date.month}.${formatted.date.year} at ${formatted.time.hour}:${formatted.time.minute}.`;
  }

  render() {
    const state = { ...this.state };

    return state.isLoading
      ? <Loader type="ring" />
      : <p>Page last updated on { state.data }</p>;
  }
}

export default FetchApiGitHub;
