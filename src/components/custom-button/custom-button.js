import React from "react";
import classes from "./custom-button.module.scss";

const CustomButton = ({ children, size, ...props }) => (
  <button className={classes.CustomButton} {...props}>
    {children}
  </button>
);

export default CustomButton;
