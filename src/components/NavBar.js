import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import styles from "../styles/homeBanner.module.css";

const NavBar = () => {
  const [active, setActive] = useState(false);

  // const changeBackground = () => {
  //     console.log(window.scrollY);
  // }

  // window.addEventListener('scroll', changeBackground)

  const burgerClasses = active
    ? `${styles.burger} ${styles.toggle}`
    : `${styles.burger}`;
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_inner}>
        <NavLink to='/' className={styles.logo}>
          <img src={logo} alt="logo" />
          <h3>GetEng</h3>
        </NavLink>
        <ul className={styles.list}>
          <li>
            <Link to="/jobs" className={styles.link}>
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              Success stories
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              Articles
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              For Companies
            </Link>
          </li>
          <li>
            <Link to="/login" className={styles.link}>
              Log In
            </Link>
          </li>
        </ul>
        <div className={burgerClasses} onClick={() => setActive(!active)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
