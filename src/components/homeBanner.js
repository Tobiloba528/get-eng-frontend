import React, { useState } from "react";
import Lottie from "react-lottie";
import styles from "../styles/homeBanner.module.css";
import devAnimation from "../assets/lotties/dev.json";
import Button from "./common/Button";
import useWindowSize from "../hooks/useWindowSize";

const HomeBanner = () => {
  const { width } = useWindowSize();

  const devOptions = {
    loop: true,
    autoplay: true,
    animationData: devAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.home_banner}>
      <div className={styles.banner}>
        <div className={styles.banner_content}>
          <h1>Are you a world class developer?</h1>
          <p>Get a job at a top tech company</p>
          <Button
            title="Get Started"
            color="white"
            background="rgb(247, 65, 65)"
          />
        </div>
        <div>
          <div className={styles.lottie}>
            <Lottie
              options={devOptions}
              width={width > 550 && 500}
              className={styles.lottie_item}
            />
          </div>
        </div>
      </div>
      <div className={styles.custom_shape_divider_bottom_1634473055}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shape_fill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HomeBanner;
