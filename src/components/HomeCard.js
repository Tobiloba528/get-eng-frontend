import React from "react";
import styles from "../styles/homeCard.module.css";
import Button from "./common/Button";

const HomeCard = ({ title }) => {
  return (
    <div className={styles.container}>
      <p>
        Need a developer to join your firm <span className={styles.span}>{title}</span>
      </p>
      <Button
        className={styles.btn}
        title="Get Started"
        background="rgb(247, 65, 65)"
      />
    </div>
  );
};

export default HomeCard;
