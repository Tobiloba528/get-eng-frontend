import React from "react";
import styles from '../../styles/input.module.css'

const SelectInput = () => {
  return (
    <select name="cars" id="cars" className={styles.select_input_container}>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  );
};

export default SelectInput;
