// Helper function to query current screen

/**
  TODO:
    - sync with property names in breakpoint.scss
 */

const breakpoints = {
  mobile: '(max-width: 767px)',
  tablet: '(max-width: 1023px)',
  desktop: '(max-width: 1439px)',
  desktopHD: '(min-width: 1440px)',
};

const mediaQuery = (screen) => {
  const hasMatched = window.matchMedia(breakpoints[screen]).matches;
  return hasMatched;
};

export default mediaQuery;
