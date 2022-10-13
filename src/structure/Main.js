import React from 'react';
import Home from '../routes/Home.js';
import About from '../routes/About.js';
import Projects from '../routes/Projects.js';
import Skills from '../routes/Skills.js';
import Contact from '../routes/Contact.js';
import '../styles/routes/sections.css';

const Main = () => {
  return (
    <main className="Main">
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Main;
