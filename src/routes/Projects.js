import React from 'react';
import { Slider } from '../items/Slider.js';
import { CreateProject } from '../items/CreateProject.js';
import { projectData } from '../refs/projects.js';

const Projects = () => {
  return (
    <div id="Projects" className="section">
      <h2 className="subtitle-section">
        My<span className="span-subtitle"> projects</span>
      </h2>
      <div
        style={{
          maxWidth: '100%',
          margin: '50px auto',
        }}
      >
        <Slider>
          <CreateProject data={projectData} />
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
