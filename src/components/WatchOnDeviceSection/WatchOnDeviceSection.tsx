import React from "react";
import OurStoryCard from "../OutStoryCard";
import Image from "next/image";
import styles from "./WatchOnDeviceSection.module.css";

const WatchOnDeviceSection = () => {
  return (
    <OurStoryCard
      title={"Watch everywhere."}
      subtitle={
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
      }
      rightTitle={false}
    >
      <div className={styles.tv}>
        <Image
          src={"/images/device-pile.png"}
          alt="device"
          width={600}
          height={450}
        />
        <div className={styles.gif}>
          <video autoPlay muted loop playsInline>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </OurStoryCard>
  );
};

export default WatchOnDeviceSection;
