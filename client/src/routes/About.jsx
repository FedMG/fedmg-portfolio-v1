import { Typography } from "../items/Typography.jsx";
import { Board } from "../items/about/Board.jsx";
import { CreateShape } from "../iterators/CreateShape.jsx";
import { triangle, waves } from "../refs/shapes.js";

export const About = () => {
  return (
    <div id="About" className="section">
      <CreateShape data={waves.downside} />
      <div className="section-content">
        <Typography as="h2" style="subtitle-section">
          <Typography as="span" style="span-subtitle">
            About{" "}
          </Typography>
          me
        </Typography>
        <Board />
      </div>
      <CreateShape data={triangle.upside} />
    </div>
  );
};
