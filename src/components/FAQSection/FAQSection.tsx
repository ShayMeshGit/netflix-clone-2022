import React from "react";
import EmailFrom from "../EmailForm";
import FAQList from "../FAQList";
import Card from "../UI/Card";
import styles from "./FAQSection.module.css";

const FAQSection = () => {
  return (
    <Card className={styles.faqCard}>
      <div className={styles.faqContainer}>
        <h1>Frequently Asked Questions</h1>
        <FAQList />
        <EmailFrom />
      </div>
    </Card>
  );
};

export default FAQSection;
