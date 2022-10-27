import { useContext } from "react";
import { SkillsContext } from "../../iterators/CreateSkill"
import { Shape } from "../../iterators/Shape.jsx";

export const SkillSVG = () => {
  const skill = useContext(SkillsContext);
  const { styles, svg, title, path } = skill;

  return <Shape data={{styles, svg, title, path}} />;
};