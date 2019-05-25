// Log config and helper class to log components methods calls

const project = 'be-codified';

const logConfig = {
  app: {
    nameComponent: 'App',
    type: 'class',
    outputLog: true,
  },
  clients: {
    nameComponent: 'Clients',
    type: 'func',
    outputLog: false,
  },
  drawer: {
    nameComponent: 'Drawer',
    type: 'class',
    outputLog: true,
  },
  fetchApiGitHub: {
    nameComponent: 'FetchApiGitHub',
    type: 'class',
    outputLog: false,
  },
  footer: {
    nameComponent: 'Footer',
    type: 'func',
    outputLog: false,
  },
  intro: {
    nameComponent: 'Intro',
    type: 'class',
    outputLog: false,
  },
  knowledge: {
    nameComponent: 'Knowledge',
    type: 'func',
    outputLog: false,
  },
  latestWork: {
    nameComponent: 'LatestWork',
    type: 'func',
    outputLog: false,
  },
  link: {
    nameComponent: 'Link',
    type: 'func',
    outputLog: false,
  },
  loader: {
    nameComponent: 'Loader',
    type: 'func',
    outputLog: false,
  },
  navigation: {
    nameComponent: 'Navigation',
    type: 'func',
    outputLog: false,
  },
  scrollBarVertical: {
    nameComponent: 'ScrollBarVertical',
    type: 'class',
    outputLog: false,
  },
  scrollToAnchor: {
    nameComponent: 'ScrollToAnchor',
    type: 'class',
    outputLog: false,
  },
};

class Log {
  constructor(config) {
    this.config = { ...config };
    this.debug = require('debug')(`${project}: ${config.nameComponent} (${config.type})`); // eslint-disable-line global-require
  }

  output = (nameMethod, outputLog) => (
    (this.config.outputLog && outputLog)
      ? this.debug(nameMethod)
      : null
  );
}

export { logConfig, Log };
