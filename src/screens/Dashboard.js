import React from "react";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";
import {
  AiOutlineUser,
  IoMdTimer,
  BsBagCheck,
  IoKeyOutline,
  MdOutlineArticle,
  AiOutlineFundProjectionScreen,
  GiNotebook,
} from "react-icons/all";
import Footer from "../components/Footer";
import styles from "../styles/dashboard.module.css";
import ScrollTop from "../components/ScrollTop";

const Dashboard = () => {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.header}>
          <IoMdTimer />
          <span>Dashboard</span>
        </div>
        <div className={styles.row_container}>
          <div className={styles.row}>
            <div
              className={styles.row_item}
              onClick={() => history.push("/profile")}
            >
              <AiOutlineUser className={styles.icon} />
              <p>Profile</p>
            </div>
            <div className={styles.row_item}>
              <AiOutlineFundProjectionScreen className={styles.icon} />
              <p>Assessment</p>
            </div>
            <div className={`${styles.row_item} ${styles.row_item_right}`}>
              <GiNotebook className={styles.icon} />
              <p>Project</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.row_item}>
              <MdOutlineArticle className={styles.icon} />
              <p>My Articles</p>
            </div>
            <div className={styles.row_item}>
              <BsBagCheck className={styles.icon} />
              <p>Applied Jobs</p>
            </div>
            <div className={`${styles.row_item} ${styles.row_item_right}`}>
              <IoKeyOutline className={styles.icon} />
              <p>Change Password</p>
            </div>
          </div>
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </>
  );
};

export default Dashboard;
