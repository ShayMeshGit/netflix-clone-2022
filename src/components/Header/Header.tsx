import React from "react";
import NetflixIcon from "../../../public/icons/netflix.svg";

//components
import Image from "next/image";
//styles
import styles from "./Header.module.css";
import Button from "../UI/Button";

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <Image className={styles.icon} src={NetflixIcon} alt="netflix-logo" />
        <Button type="button" onClick={() => {}}>
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;
