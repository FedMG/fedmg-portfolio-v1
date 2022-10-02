import { setListener, setAnimation } from './utils.js';

const setNext = (speed, serveObject) => {
  const { sliderElem, containerStyle, container } = serveObject();
  const firstElement = sliderElem[0];

  setAnimation(
    containerStyle,
    `${speed}ms ease-out all`,
    `translateY(-${sliderElem[0].offsetWidth}px)`
  );

  const updatePosition = () => {
    setAnimation(containerStyle, 'none', `translateY(0)`);
    container.appendChild(firstElement);
    container.removeEventListener('transitionend', updatePosition);
  };

  setListener(container, 'transitionend', updatePosition);
};

export default setNext;
