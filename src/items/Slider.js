import React from 'react';
import { setNext, setPrevious } from '../functionals/move.js';
const { useRef, useCallback } = React;

const container = {
  display: 'flex',
};

const containerSlideElem = {
  margin: '0 clamp(0.3em, 2vw, 1em)',
  overflow: 'hidden',
};

const slideElement = {
  display: 'flex',
  flexWrap: 'nowrap',
};

const containerButton = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyles = {
  background: 'none',
  border: 'none',
  outline: 'none',
  width: '50px',
  height: '100%',
  maxHeight: '50px',
  pointerEvents: 'all',
  zIndex: 20,
};
const imgStyle = {
  width: '50px',
  height: '50px',
};

export const Slider = ({ children, speed = '500' }) => {
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

  const previous = () => {
    const { sliderElem } = serveObject();
    if (sliderElem.length > 0) {
      setPrevious(serveObject);
    }
  };
  return (
    <div style={container}>
      {/* left button */}
      <div style={containerButton}>
        <button onClick={previous} style={buttonStyles}>
          <img
            src="https://img.icons8.com/material/96/000000/chevron-left--v1.png"
            style={imgStyle}
          />
        </button>
      </div>

      {/* slide Element */}
      <div style={containerSlideElem}>
        <div style={slideElement} ref={slider}>
          {children}
        </div>
      </div>

      {/* right button */}
      <div style={containerButton}>
        <button onClick={next} style={buttonStyles}>
          <img
            src="https://img.icons8.com/material/96/000000/chevron-right--v1.png"
            style={imgStyle}
          />
        </button>
      </div>
    </div>
  );
};
