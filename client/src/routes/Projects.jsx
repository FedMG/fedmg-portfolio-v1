import { Slider } from "../items/Slider.jsx";
import { CreateProject } from "../iterators/CreateProject.jsx";
import { CreateShape } from "../iterators/CreateShape.jsx";
import { projectData } from "../refs/projects.js";
import { triangle } from "../refs/shapes.js";

export const Projects = () => {
  return (
    <div id="Projects" className="section">
      <CreateShape data={triangle.downside} />
      <div className="section-content">
        <h2 className="subtitle-section">
          My<span className="span-subtitle"> projects</span>
        </h2>
        <div className="project-slider-bk">
          <Slider>
            <CreateProject data={projectData} />
          </Slider>
        </div>
      </div>
    </div>
  );
};
