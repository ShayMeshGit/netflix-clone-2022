import React from "react";
import type { Props } from "./types";
import styles from "./Card.module.css";

const Card = ({ children, className = "" }: Props) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
