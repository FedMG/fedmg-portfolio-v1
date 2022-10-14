import React from "react";
import { Slider } from "../items/Slider.jsx";
import { CreateProject } from "../items/CreateProject.jsx";
import { projectData } from "../refs/projects.js";
import "../styles/routes/projects.css";

const Projects = () => {
  return (
    <div id="Projects" className="section">
      <div class="custom-shape-divider-top-1665642090">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      {/* second */}
      {/* <div class="custom-shape-divider-top-1665640187">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div> */}
      <h2 className="subtitle-section">
        My<span className="span-subtitle"> projects</span>
      </h2>
      <div className="example">
        <div className="project-slider-bk">
          <Slider>
            <CreateProject data={projectData} />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
