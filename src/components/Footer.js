import React from "react";
import logo from "../assets/logo.png";
import styles from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.inner}>
      <div className={styles.name}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>GetEng</p>
        </div>
        <p>Sign up on out patform today to get your new job.</p>
      </div>
        <ul className={styles.list}>
          <li>Category</li>
          <li>iOS Developer</li>
          <li>UX Designers</li>
          <li>Program & Tech</li>
          <li>UI Designers</li>
        </ul>
        <ul className={styles.list}>
          <li>About</li>
          <li>About Us</li>
          <li>Partnerships</li>
          <li>Finanace experts</li>
          <li>The Team</li>
        </ul>
        <ul className={styles.list}>
          <li>Contact</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>FAQs</li>
          <li>Press Center</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
