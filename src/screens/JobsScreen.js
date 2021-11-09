import React from "react";
import { BiFilterAlt } from "react-icons/all";
import JobItem from "../components/JobItem";
import styles from "../styles/job.module.css";
import SelectInput from "../components/common/SelectInput";

const JobsScreen = () => {
  return (
    <div className={styles.job_container}>
      <h1>Jobs</h1>
      <div className={styles.job_inner}>
        <div className={styles.job_first}>
          <div className={styles.filters_container}>
            <div className={styles.filter_header}>
              <BiFilterAlt />
              <span>Filter Jobs</span>
            </div>
            <div className={styles.filters}>
              <SelectInput />
              <SelectInput />
              <SelectInput />
            </div>
            <div className={styles.filter_btn_container}>
              <button className={styles.filter_btn}>
                <BiFilterAlt />
              </button>
            </div>
          </div>

          <div className={styles.processes}>
            <p className={styles.processes_header}>How GetDev Works</p>
            <p className={styles.process}>
              Setup your profile, showcase your skills and expertise
            </p>
            <p className={styles.process}>Test and show off your skill</p>
            <p className={styles.process}>
              Job match: We match you with your skill and expertise
            </p>
            <p className={styles.process}>
              Choose Job: Make a choice from jobs that match yor expectations
            </p>
          </div>
        </div>
        <div className={styles.job_second}>
          <div className={styles.job_list}>
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
            <JobItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsScreen;
