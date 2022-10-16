import { CreateShape } from "../layouts/CreateShape.jsx";
import { triangle, waves } from "../refs/shapes.js";
import "../styles/routes/about.css";

const About = () => {
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

export default About;
