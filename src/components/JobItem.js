import React from "react";
import styles from "../styles/job.module.css";
import { GoLocation } from "react-icons/all";
import jobImage from "../assets/job.svg";

const JobItem = () => {
  return (
    <div className={styles.job_item}>
      <img src={jobImage} alt="Job" className={styles.job_item_img} />
      <div className={styles.job_item_content}>
        <h2 className={styles.job_item_title}>Product Manager</h2>
        <p className={styles.job_item_cost}>#200000 - #250000</p>
        <div className={styles.job_item_address}>
          <GoLocation />
          <p>Lagos, Nigeria</p>
        </div>
        <div className={styles.job_item_stack}>
            <p>Javascript</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
