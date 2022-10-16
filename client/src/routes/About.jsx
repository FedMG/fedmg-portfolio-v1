import { CreateShape } from "../iterators/CreateShape.jsx";
import { triangle, waves } from "../refs/shapes.js";

export const About = () => {
  return (
    <div id="About" className="section">
      <CreateShape data={waves.downside} />
      <h2 className="subtitle-section">
        <span className="span-subtitle">About</span> me
      </h2>
      <CreateShape data={triangle.upside} />
    </div>
  );
};
