import React from "react";
import OurStoryCard from "../OutStoryCard";
import styles from "./DownloadAndWatchSection.module.css";
import Image from "next/image";

const DownloadAndWatchSection = () => {
  return (
    <OurStoryCard
      title={"Download your shows to watch offline."}
      subtitle={
        "Save your favorites easily and always have something to watch."
      }
      rightTitle={true}
    >
      <div className={styles.tv}>
        <Image
          src={"/images/mobile-0819.jpg"}
          alt="mobile"
          width={600}
          height={450}
        />
        <div className={styles.downloadContainer}>
          <Image
            src={"/images/boxshot.png"}
            alt={"strangers-things"}
            width={40}
            height={65}
          />
          <div className={styles.downloadTitle}>
            <h4>Stranger Things</h4>
            <p>Downloading...</p>
          </div>
          <Image
            src={"/gifs/download-icon.gif"}
            alt={"download-gif"}
            width={50}
            height={50}
          />
        </div>
      </div>
    </OurStoryCard>
  );
};

export default DownloadAndWatchSection;
