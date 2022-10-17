import type { Props } from "./types";
import React, { useState } from "react";
import styles from "./Question.module.css";
import { AnimatePresence, motion } from "framer-motion";
import plusSVG from "../../../public/icons/plus.svg";
import Image from "next/image";

const Question = ({ question: { title, descriptions } }: Props) => {
  const [opened, setOpened] = useState(false);

  const clickHandler = () => setOpened((prev) => !prev);

  return (
    <div className={styles.question}>
      <div onClick={clickHandler} className={styles.faqBtn}>
        <h2>{title}</h2>
        <motion.div
          className={styles.icon}
          animate={{ rotate: opened ? 0 : 45 }}
        >
          <Image src={plusSVG} alt="icon" layout="fill" />
        </motion.div>
      </div>
      <AnimatePresence initial={false}>
        {opened && (
          <motion.div
            variants={{
              open: { height: "auto" },
              close: { height: 0 },
            }}
            animate={"open"}
            exit={"close"}
            transition={{ duration: 0.2 }}
            className={styles.description}
          >
            {descriptions.map((des, i) => (
              <p key={i}>
                {des} {"\n"}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Question;
