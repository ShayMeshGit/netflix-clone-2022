import React from "react";
import OurStoryCard from "../OutStoryCard";
import Image from "next/image";
import styles from "./KidsValueSection.module.css";

const KidsValueSection = () => {
  return (
    <OurStoryCard
      title={"Create profiles for kids."}
      subtitle={
        "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
      }
      rightTitle={true}
    >
      <div className={styles.tv}>
        <Image
          src={
            "/images/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png"
          }
          alt="kids-value"
          width={600}
          height={450}
        />
      </div>
    </OurStoryCard>
  );
};

export default KidsValueSection;
