import React, { useContext } from "react";
import { DataContext } from "./CreateProject.jsx";

export const Figure = ({ idx, cap }) => {
  const { sources } = useContext(DataContext);

  return (
    <figure className="project-figure">
      <img src={sources[idx]} alt={cap + " image"} className="project-image" />
      <figcaption className="project-figcaption">{cap}</figcaption>
    </figure>
  );
};
