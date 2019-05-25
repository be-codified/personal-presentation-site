import React, { Component } from 'react';
import Loader from '../loader/Loader';
import { logConfig, Log } from '../../helpers/log';

const log = new Log(logConfig.fetchApiGitHub);
const fetchApiUrl = 'https://api.github.com/repos/be-codified/personal-presentation-site';

/**
  TODO:
    - handle errors better (if cannot fetch, if forbidden)
    - move timeMin to Loader component
 */

/**
 * Class representing fetch Api GitHub.
 * @extends Component
 */

class FetchApiGitHub extends Component {
  constructor(props) {
    /**
     * Create fetch Api GitHub
     * @param {object} props - Props object
     */

    super(props);

    // Setting default properties
    this.state = {
      isLoading: true,
      data: null,
    };
  }

  /**
   * Component did mount
   * @return {void}
   */

  componentDidMount = () => {
    log.output('componentDidMount', true);

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

  /**
   * Format date and time
   * @return {string} Value to be formatted
   * @return {string} Formated date and time, e.g. `25.05.2019 at 12:00`
   */

  formatDateAndTime = (string) => {
    log.output('formatDateAndTime', true);

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

    return `${formatted.date.day}.${formatted.date.month}.${formatted.date.year} at ${formatted.time.hour}:${formatted.time.minute}`;
  }

  /**
   * Render
   * @return {object} React component instance
   */

  render() {
    log.output('render', true);

    const state = { ...this.state };

    return state.isLoading
      ? <Loader type="ring" />
      : <span>Website last updated on { state.data }.</span>;
  }
}

export default FetchApiGitHub;
