import React from "react";
import styles from '../styles/homeFeature.module.css'
import HomeCard from './HomeCard';

const HomeFeature = () => {
  return (
    <div className={styles.container}>
      <h3>Hire a qualified developer!</h3>
      <p>
        Hire pre-qualifies developers with right skills to take your company to
        the next level
      </p>
      <div className={styles.inner}>
        <HomeCard title='permanently'/>
        <HomeCard title='temporarily'/>
      </div>
    </div>
  );
};

export default HomeFeature;
