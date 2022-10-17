import React from "react";
import Card from "../UI/Card";
import styles from "./Landing.module.css";
import Image from "next/image";
import EmailFrom from "../EmailForm";
const LandingSection = () => {
  return (
    <Card>
      <div className={styles.backgroudImage}>
        <Image
          src={
            "/images/IL-en-20221003-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          }
          alt={"background-image"}
          layout={"fill"}
          objectFit={"cover"}
          priority
        />
        <div className={styles.dim}></div>
      </div>
      <div className={styles.landing}>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <EmailFrom />
      </div>
    </Card>
  );
};

export default LandingSection;
