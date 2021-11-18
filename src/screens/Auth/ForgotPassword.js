import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/authScreen.module.css";
import input_styles from "../../styles/input.module.css";
import { BiEnvelope } from "react-icons/all";
import ScrollTop from "../../components/ScrollTop";
import AuthInput from "../../components/common/AuthInput";

const ForgotPassword = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1>Login</h1>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          //   value={data.email}
          //   handleChange={handleChange}
        >
          {" "}
          <BiEnvelope className={input_styles.auth_icon} />
        </AuthInput>
        <button className={styles.btn2}>Submit</button>
        <div className={styles.link_container}>
          <Link to="/login">login</Link>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default ForgotPassword;
