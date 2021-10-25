import React from "react";
import styles from "../../styles/authScreen.modules.css";
// import 'bulma/css/bulma.min.css';
import { AiOutlineUser } from "react-icons/ai";

const LoginScreen = () => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className="field" style={{ width: "200px", margin: "50px" }}>
          <p className="control has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-right">
              <AiOutlineUser />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
