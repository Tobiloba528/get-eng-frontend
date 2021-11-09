import React from "react";
import styles from "../../styles/input.module.css";

const AuthInput = ({
  children,
  type = "text",
  placeholder,
  name,
  value,
  handleChange,
}) => {
  return (
    <div className={styles.auth_input_container}>
      <input
        className={styles.auth_input_field}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {children}
    </div>
  );
};

export default AuthInput;
