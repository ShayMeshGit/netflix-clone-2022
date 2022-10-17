import React from "react";
import type { Props } from "./types";
import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
