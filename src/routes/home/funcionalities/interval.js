const addIntervals = (containerInterval, serveObject, getInterval) => {
  const { container } = serveObject();
  containerInterval = getInterval();
};

export default addIntervals;
