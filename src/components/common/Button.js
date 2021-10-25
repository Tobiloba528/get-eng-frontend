import React from "react";
import styles from "../../styles/button.module.css";

const Button = ({ title, color = "white", background = "red" }) => {
  return (
    <button
      className={styles.btn}
      style={{ color: `${color}` , background: `${background}` }}
    >
      {title}
    </button>
  );
};

export default Button;
