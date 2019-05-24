// Helper class to log

class Log {
  constructor(componentName, logOutput = false) {
    this.componentName = componentName;
    this.logOutput = logOutput;

    this.debug = require('debug')(`be-codified :: ${componentName}`); // eslint-disable-line global-require
  }

  output = (methodName, logOutput) => (
    (this.logOutput && logOutput)
      ? this.debug(methodName)
      : null
  );
}

export default Log;
