import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

import Image from "next/image";
import Button from "../UI/Button";
import Input from "../UI/Input";
import RightArrowSVG from "../../../public/icons/rightArrow.svg";

import styles from "./EmailForm.module.css";

const EmailFrom = () => {
  const [email, setEmail] = useState("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Your email is: " + email);
  };

  return (
    <div className={styles.emailForm}>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form onSubmit={submitHandler}>
        <Input
          name="email"
          type="text"
          id="email"
          value={email}
          label={"Email Address"}
          className={styles.emailInput}
          onChange={changeHandler}
          errorMessage={"Email is required!"}
        />
        <Button className={styles.formBtn} type={"submit"}>
          <span>Get Started</span>
          <Image src={RightArrowSVG} alt={"arrow"} />
        </Button>
      </form>
    </div>
  );
};

export default EmailFrom;
