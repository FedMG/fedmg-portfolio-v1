export const setListener = (element, event, callback) => {
  element.addEventListener(event, callback);
};

export const setAnimation = (containerStyle, transition, transform) => {
  containerStyle.transition = transition;
  containerStyle.transform = transform;
};
