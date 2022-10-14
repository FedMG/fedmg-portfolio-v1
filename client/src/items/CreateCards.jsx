import React, { useContext } from "react";
import { DataContext } from "./CreateProject.jsx";
import { Figure } from "./Figure.jsx";
import { ButtonsSection } from "./ButtonsSection.jsx";

export const CreateCards = () => {
  const { captions } = useContext(DataContext);
  return captions.map((caption, index) => (
    <div key={caption} className="project-cards">
      <Figure idx={index} cap={caption} />
      <ButtonsSection idx={index} />
    </div>
  ));
};
