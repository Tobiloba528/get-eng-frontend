import React from "react";
import styles from "../styles/homeService.module.css";
import Lottie from "react-lottie";
import useWindowSize from "../hooks/useWindowSize";
import interviewAnimation from "../assets/lotties/interview.json";
import hiringAnimation from "../assets/lotties/hiring.json";
import hiredAnimation from "../assets/lotties/hired.json";

const HomeService = () => {
  const { width } = useWindowSize();

  const aniOptions = (ani) => {
    const interviewOptions = {
      loop: true,
      autoplay: true,
      animationData: ani,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return interviewOptions;
  };

  return (
    <div className={styles.container}>
      <h2>Things to know about GetEng</h2>
      <div className={styles.inner}>
        <div className={styles.service_item}>
          <div className={styles.content}>
            <h3>Interview</h3>
            <p>
              Have you been sending tons of applications but never getting an
              invitavtion for interviews?
            </p>
          </div>
          <div className={styles.lottie}>
            <Lottie
              options={aniOptions(interviewAnimation)}
              // width={width > 550 && 400}
              className={styles.lottie_item}
            />
          </div>
        </div>

        <div className={styles.service_item}>
          <div className={styles.lottie}>
            <Lottie
              options={aniOptions(hiringAnimation)}
              // width={width > 550 && 400}
              className={styles.lottie_item}
            />
          </div>
          <div className={styles.content}>
            <h3>Match with a company</h3>
            <p>
              Do you have a set of amazing skills that would be well utilized by
              a top tech company both in nigeria or other country?
              Do you know we can match you with such companies?
            </p>
          </div>
        </div>

        <div className={styles.service_item}>
          <div className={styles.content}>
            <h3>Get you hired</h3>
            <p>
              Sign up with us today, lets help you get the hard job done and
              start the process to get you your dream job today...
            </p>
          </div>
          <div className={styles.lottie}>
            <Lottie
              options={aniOptions(hiredAnimation)}
              // width={width > 550 && 400}
              className={styles.lottie_item}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
