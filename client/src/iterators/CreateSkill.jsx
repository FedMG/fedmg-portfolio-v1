import { Card } from "../items/skills/Card.jsx";

import { createContext } from "react";
export const SkillsContext = createContext(null);

export const CreateSkill = ({ data }) => {
  return (
    <div className="skill-cards">
      {data.map(({ id }) => (
        <div key={id}>
          <SkillsContext.Provider value={data[id]}>
            <Card />
          </SkillsContext.Provider>
        </div>
      ))}
    </div>
  );
};
