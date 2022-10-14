import React from "react";

export const Button = ({ href, name }) => (
  <a href={href} className="project-anchors" target="_blank">
    <button className="project-buttons">{name}</button>
  </a>
);
