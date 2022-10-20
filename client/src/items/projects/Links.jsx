import { useContext } from "react";
import { DataContext } from "../../iterators/CreateProject.jsx";
import { Button } from "../Button.jsx";

export const Links = ({ idx }) => {
  const { links } = useContext(DataContext);
  return (
    <div className="project-buttons-bk">
      <Button href={links[idx][0]} name="Github" style="project-buttons" />
      <Button href={links[idx][1]} name="Stackblitz" style="project-buttons" />
    </div>
  );
};
