import React from 'react';
import { setNext, setPrevious } from '../funcionalities/move.js';
const { useRef, useCallback } = React;

const container = {
  position: 'relative',
  // overflow: 'hidden',
};

const subContainer = {
  display: 'flex',
  // flexWrap: 'nowrap',
  // justifyContent: 'evenly',
  // alignItems: 'center',
  position: 'relative',
  // overflow: 'hidden',
};

const containerSlideElem = {};

const slideElement = {
  // margin: '15px',
  // border: '1px solid red',
  display: 'flex',
  flexWrap: 'nowrap',
  // overflow: 'hidden',
};

const containerButton = {
  // border: '1px solid green',
  display: 'flex',
  alignItems: 'center',
};

const buttonStyles = {
  pointerEvents: 'all',
  background: 'none',
  border: 'none',
  outline: 'none',
  width: '50px',
  height: '100%',
  maxHeight: '50px',
  // border: '1px solid red',
  zIndex: 20,
};
const imgStyle = {
  width: '50px',
  height: '50px',
  // '&:hover': {
  //   // left
  //   filter: 'drop-shadow(2px 0px 0px #fff)',
  //   // right
  //   filter: 'drop-shadow(-2px 0px 0px #fff)',
  // },
  // border: '1px solid blue',
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

  const previous = (e) => {
    const { sliderElem } = serveObject();
    if (sliderElem.length > 0) {
      setPrevious(serveObject);
    }
  };
  return (
    <div style={container}>
      <div style={subContainer}>
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
    </div>
  );
};
// https://img.icons8.com/material/96/000000/chevron-left--v1.png
// https://img.icons8.com/material/96/000000/chevron-right--v1.png
