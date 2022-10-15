import React from "react";

export const Button = ({ href, name, src, alt, onclick, style }) => {
  if (!src) {
    return (
      <a href={href} className="anchors" target="_blank">
        <button className={style}>{name}</button>
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
