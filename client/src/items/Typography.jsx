import React from "react";

export const Typography = ({ style, as, children }) => {
  if (as === "span") {
    return <span className={style}>{children}</span>;
  }
};
