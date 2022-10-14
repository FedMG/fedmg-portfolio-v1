import React, { useContext } from "react";
import { DataContext } from "./CreateProject.jsx";
import { Button } from "./Button.jsx";

export const ButtonsSection = ({ idx }) => {
  const { links } = useContext(DataContext);
  return (
    <div className="project-buttons-bk">
      <Button href={links[idx][0]} name="Github" />
      <Button href={links[idx][1]} name="Stackblitz" />
    </div>
  );
};
