import React from "react";
import { Slider } from "../items/Slider.jsx";
import { CreateProject } from "../items/CreateProject.jsx";
import { projectData } from "../refs/projects.js";
import { CreateShape } from "../layouts/CreateShape.jsx";
import { triangle } from "../refs/shapes.js";
import "../styles/routes/projects.css";

const Projects = () => {
  return (
    <div id="Projects" className="section">
      <CreateShape data={triangle.downside} />
      <h2 className="subtitle-section">
        My<span className="span-subtitle"> projects</span>
      </h2>
      <div className="project-slider-bk">
        <Slider>
          <CreateProject data={projectData} />
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
