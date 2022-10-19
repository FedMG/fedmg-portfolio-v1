import { Typography } from "../items/Typography.jsx";
import { CreateSkill } from "../iterators/CreateSkill.jsx";
import { skills } from "../refs/skills.js";

export const Skills = () => {
  return (
    <div id="Skills" className="section">
      <div className="section-content">
        <Typography as="h2" style="subtitle-section">
          My<Typography style="span-subtitle"> skills</Typography>
        </Typography>
        <div className="skill-cards-bk">
          <CreateSkill data={skills} />
        </div>
      </div>
    </div>
  );
};
