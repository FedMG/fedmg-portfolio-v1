import React from 'react';
import setNext from '../funcionalities/move.js';
import addIntervals from '../funcionalities/interval.js';
const { useRef, useEffect, useCallback } = React;

const Slider = ({ children, speed = '500', interval = '3500' }) => {
  const slider = useRef(null);
  const intervals = useRef(null);

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

  useEffect(() => {
    addIntervals(intervals.current, serveObject, () =>
      setInterval(() => next(), interval)
    );
  }, [interval, next]);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', flexWrap: 'nowrap' }} ref={slider}>
        {children}
      </div>
    </div>
  );
};

export default Slider;
