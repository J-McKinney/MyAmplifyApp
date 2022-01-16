import React from "react";
import Styles from "./Button.module.css";

const Button = ({ children, onClick }) => (
  <button className={Styles.button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
