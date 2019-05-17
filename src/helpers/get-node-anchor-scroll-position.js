// Helper function to get node anchor scroll position

const getNodeAnchorScrollPosition = (node, offset) => {
  // Get position of anchor
  const nodePosition = window.pageYOffset + node.getBoundingClientRect().top;

  // Calculate scroll position
  const scrollPosition = nodePosition - offset;
  return scrollPosition;
};

export default getNodeAnchorScrollPosition;
