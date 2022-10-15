import React from "react";
import { Button } from "./Button.jsx";

export const CreateButtons = ({ data, style }) => {
  return data.map(({ id, name, link }) => (
    <Button key={id} name={name} style={style} href={link} />
  ));
};
