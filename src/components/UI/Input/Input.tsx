import type { Props } from "./types";
import React, { useState } from "react";
import styles from "./Input.module.css";
import { motion, useAnimationControls } from "framer-motion";

const Input = ({
  name,
  type,
  id,
  value,
  label,
  onChange,
  errorMessage,
  className = "",
}: Props) => {
  const animationControls = useAnimationControls();
  const [isTouched, setIsTouched] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (value.length > 0) setShowErrorMessage(false);
    onChange(event);
  };

  const focusHandler = () => {
    animationControls.start({ scale: 0.85, y: -12, x: -8 });
    setIsTouched(true);
  };

  const blurHandler = () => {
    if (value === "") animationControls.start({ scale: 1, y: 0, x: 0 });
    if (isTouched && value === "") return setShowErrorMessage(true);
    setShowErrorMessage(false);
  };

  return (
    <div className={styles.inputWrapper}>
      <div className={`${styles.inputField} ${className}`}>
        <input
          name={name}
          type={type}
          id={id}
          value={value}
          onChange={changeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          className={showErrorMessage ? styles.inputErrorUnderline : ""}
        />
        <motion.label animate={animationControls} htmlFor={id}>
          {label}
        </motion.label>
      </div>
      {showErrorMessage && (
        <div className={styles.inputError}>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
