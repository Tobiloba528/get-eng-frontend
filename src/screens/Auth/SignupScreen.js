import React, { useState, useEffect } from "react";
import styles from "../../styles/authScreen.module.css";
import AuthInput from "../../components/common/AuthInput";
import { AiOutlineUser, HiOutlineKey, BiEnvelope } from "react-icons/all";
import input_styles from "../../styles/input.module.css";
import { Link } from "react-router-dom";
import ScrollTop from '../../components/ScrollTop';

const SignupScreen = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

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
        <h1>Sign Up</h1>
        <AuthInput
          name="username"
          type="text"
          placeholder="Username"
          value={data.username}
          handleChange={handleChange}
        >
          <AiOutlineUser className={input_styles.auth_icon} />
        </AuthInput>
        <AuthInput
          name="email"
          type="email"
          placeholder="Email"
          value={data.email}
          handleChange={handleChange}
        >
          <BiEnvelope className={input_styles.auth_icon} />
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
        <AuthInput
          name="confirm_password"
          type="password"
          placeholder="Password"
          value={data.confirm_password}
          handleChange={handleChange}
        >
          <HiOutlineKey className={input_styles.auth_icon} />
        </AuthInput>
        <button className={styles.btn2}>Login</button>
        <div className={styles.link_container}>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <ScrollTop />
    </div>
  );
};

export default SignupScreen;
