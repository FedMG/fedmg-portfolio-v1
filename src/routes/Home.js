import React from 'react';

const Home = () => {
  return (
    <div
      id="Home"
      style={{
        border: '0.5px solid black',
        height: '100%',
        width: '100%',
        minHeight: '300px',
      }}
    >
      <div
        style={{
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            padding: '3em',
            // marginTop: '5.72em',
            // paddingTop: '5.72em',
            // border: '1px solid red',
            minHeight: '16em',
            height: '100%',
            width: '100%',
            // textAlign: 'center',
          }}
        >
          <h2
            style={{
              // color: '#fff',
              color: '#8758FF',
              fontSize: '3.5em',
            }}
          >
            Hello world!
          </h2>
        </div>
        <div
          style={{
            display: 'flex',
            padding: '3em',
            height: '100%',
            color: 'white',
            width: '100%',
          }}
        >
          <div style={{ display: 'block', width: '100%' }} className="">
            <h2 className="">
              My name is{' '}
              <span className="" style={{ color: '#5CB8E4' }}>
                Federico
              </span>
            </h2>
            <h3 className="">
              I'm a <span className="">Fullstack Developer</span>
            </h3>
            <p className="" style={{ color: '#F2F2F2' }}>
              A passionate of the IT World.
            </p>
          </div>
        </div>
        <div
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '0 15px',
              paddingLeft: '2em',
              width: '100%',
            }}
          >
            <button
              style={{
                backgroundColor: '#ff6347',
                color: '#fff',
                padding: '0.5em',
                width: '9em',
                borderRadius: '0.3em',
              }}
            >
              GitHub
            </button>
            <button
              style={{
                backgroundColor: '#ff6347',
                color: '#fff',
                padding: '0.5em',
                width: '9em',
                borderRadius: '0.3em',
              }}
            >
              Linkedin
            </button>
            <button
              style={{
                backgroundColor: '#ff6347',
                color: '#fff',
                padding: '0.5em',
                width: '9em',
                borderRadius: '0.3em',
              }}
            >
              Take a look
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
