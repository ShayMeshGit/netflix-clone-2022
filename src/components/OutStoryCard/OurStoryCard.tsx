import type { Props } from "./types";
import React from "react";
import Card from "../UI/Card";
import styles from "./OurStoryCard.module.css";

const OurStoryCard = ({ title, subtitle, rightTitle, children }: Props) => {
  return (
    <Card>
      <div
        className={`${styles.container} ${rightTitle ? styles.rightTitle : ""}`}
      >
        <div className={`${styles.titles} ${rightTitle ? styles.flliped : ""}`}>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <div className={styles.image}>{children}</div>
      </div>
    </Card>
  );
};

export default OurStoryCard;
