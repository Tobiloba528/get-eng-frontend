import React, { useState, useEffect } from "react";
import styles from "../../styles/authScreen.module.css";
import AuthInput from "../../components/common/AuthInput";
import { AiOutlineUser, HiOutlineKey } from "react-icons/all";
import input_styles from "../../styles/input.module.css";
import { Link } from "react-router-dom";
import ScrollTop from '../../components/ScrollTop';

const LoginScreen = () => {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = ({ currentTarget: input }) => {
    let newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles.btn_container}>
          <button className={styles.btn}>For company</button>
        </div>
        <h1>Login</h1>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          handleChange={handleChange}
        >
          <AiOutlineUser className={input_styles.auth_icon} />
        </AuthInput>
        <AuthInput
          name="password"
          type="password"
          placeholder="Password"
          value={data.password}
          handleChange={handleChange}
        >
          <HiOutlineKey className={input_styles.auth_icon} />
        </AuthInput>
        <div className={styles.link_container}>
          <Link to="/">Forgot Password?</Link>
        </div>
        <button className={styles.btn2}>Login</button>
        <div className={styles.link_container}>
          <Link to="/register">Sign Up </Link>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default LoginScreen;
