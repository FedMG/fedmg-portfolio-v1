import React from 'react';
import Home from '../routes/Home.jsx';
import About from '../routes/About.jsx';
import Projects from '../routes/Projects.jsx';
import Skills from '../routes/Skills.jsx';
import Contact from '../routes/Contact.jsx';
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