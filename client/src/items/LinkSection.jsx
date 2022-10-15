import React from "react";
import { CreateButtons } from "./CreateButtons.jsx";
import { dataButton } from "../refs/dataButton.js";

export const LinkSection = () => {
  return (
    <div className="buttons-container">
      <div className="buttons-container__subcontainer">
        <CreateButtons data={dataButton} style="button" />
      </div>
    </div>
  );
};