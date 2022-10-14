import React from "react";

export const Button = ({ href, name, src, alt, onclick }) => {
  if (!src) {
    return (
      <a href={href} className="project-anchors" target="_blank">
        <button className="project-buttons">{name}</button>
      </a>
    );
  }

  if (src) {
    return (
      <div className="slider-buttons-bk">
        <button onClick={onclick} className="slider-buttons">
          <img src={src} className="slider-icon-button" alt={alt + " icon"} />
        </button>
      </div>
    );
  }
};
