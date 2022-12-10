import { memo } from "react";
import intro from "@/assets/programming.gif";

const Image = () => {
  return (
    <div className="intro-gif-container">
      <img src={intro} className="intro-gif container" draggable="false" />
    </div>
  );
};

export default memo(Image);
