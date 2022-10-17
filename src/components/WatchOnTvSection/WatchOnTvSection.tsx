import Image from "next/image";
import React from "react";
import OurStoryCard from "../OutStoryCard";
import styles from "./WatchOnTvSection.module.css";

const WatchOnTvSection = () => {
  return (
    <OurStoryCard
      title={"Enjoy on your TV."}
      subtitle={
        "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
      }
      rightTitle={false}
    >
      <div className={styles.tv}>
        <Image src={"/images/tv.png"} alt="tv" width={600} height={450} />
        <div className={styles.gif}>
          <video autoPlay muted loop playsInline>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </OurStoryCard>
  );
};

export default WatchOnTvSection;
