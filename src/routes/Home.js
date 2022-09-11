import React from 'react';
// import Slider from './home/items/Slider.js';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#02113d', height: '500px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          color: 'white',
        }}
      >
        <div>
          <p>
            <span>Hello World!</span>
            <br /> My name is <span className="home-title__span">Federico</span>
          </p>
          <p className="">
            I'm a <span className="">Fullstack Developer</span>
          </p>
        </div>
        <div className="">
          <div className="">
            <p className="">and a passionate of the</p>
          </div>
          {/* <Slider speed="3000" interval="3000">
            <div
              style={{
                minWidth: '100%',
                overflow: 'hidden',
                transition: '0.3s ease all',
                zIndex: '20',
                position: 'relative',
              }}
            >
              <p>It World</p>
            </div>
            <div
              style={{
                minWidth: '100%',
                overflow: 'hidden',
                transition: '0.3s ease all',
                zIndex: '20',
                position: 'relative',
              }}
            >
              <p>Software Engineer</p>
            </div>
          </Slider> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
