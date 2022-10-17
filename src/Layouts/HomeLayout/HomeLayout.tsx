import type { Props } from "./types";
import React from "react";
import styles from "./HomeLayout.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomeLayout = ({ children }: Props) => {
  return (
    <div className={styles.homeContainer}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
