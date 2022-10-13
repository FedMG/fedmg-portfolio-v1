import React from 'react';
import '../styles/routes/home.css';

const Home = () => {
  return (
    <div id="Home" className="section">
      <div className="home-subcontainer">
        <div className="greeting-container">
          <span className="greeting-container__span">Hello world!</span>
        </div>
        <div className="span-container ">
          <div className="span-container__subcontainer">
            <span className="first-phrase">
              My name is <span className="first-phrase__span">Federico</span>
            </span>
            <br />
            <span className="second-phrase">
              I'm a{' '}
              <span className="second-phrase__span">Fullstack Developer</span>
            </span>
            <br />
            <span className="third-phrase">
              A passionate of the{' '}
              <span className="third-phrase__span">IT World</span>.
            </span>
            <br />
          </div>
        </div>
        <div className="buttons-container">
          <div className="buttons-container__subcontainer">
            <button className="button">GitHub</button>
            <button className="button">Linkedin</button>
            <button className="button">Take a look</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
