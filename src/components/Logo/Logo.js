import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/ll-logo.png";

const Logo = (props) => (
  <div className={styles.Logo}>
    <img src={logo} alt="Little lemon logo" className="img-responsive" />
  </div>
);

export default Logo;
