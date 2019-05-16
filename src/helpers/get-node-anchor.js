// Helper function to get node anchor

const getNodeAnchor = (ref, hash) => {
  const nodeAnchor = ref.current.querySelector(hash);
  return nodeAnchor;
};

export default getNodeAnchor;
