import React from 'react';
import { Slider } from './projects/items/Slider.js';
import { CreateProject } from './projects/CreateProject.js';
import { projectData } from './projects/projectData.js';

const Projects = () => {
  return (
    <div id="Projects" className="section">
      <h2 className="subtitle-section">
        My<span className="span-subtitle"> projects</span>
      </h2>

      {/* <Slider> */}
      <CreateProject data={projectData} />
      {/* </Slider> */}
    </div>
  );
};

export default Projects;
