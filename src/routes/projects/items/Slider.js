import React from 'react';
import setNext from '../funcionalities/move.js';
const { useRef, useCallback } = React;

const Slider = ({ children, speed = '500' }) => {
  const slider = useRef(null);

  const serveObject = () => {
    return {
      sliderElem: slider.current.children,
      containerStyle: slider.current.style,
      container: slider.current,
    };
  };

  const next = useCallback(() => {
    const { sliderElem } = serveObject();
    if (sliderElem.length > 0) {
      setNext(speed, serveObject);
    }
  }, [speed]);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', flexWrap: 'nowrap' }} ref={slider}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
