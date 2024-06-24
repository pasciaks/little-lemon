import React from "react";
import styles from "./FooterMenu.module.css";

const FooterMenu = () => (
  <div className={styles.FooterMenu}>
    <p>Menu</p>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
      <li>
        <a href="/menu">Menu</a>
      </li>
      <li>
        <a href="/reservations">Reservations</a>
      </li>
      <li>
        <a href="/order">Order</a>
      </li>
    </ul>
  </div>
);

FooterMenu.propTypes = {};

FooterMenu.defaultProps = {};

export default FooterMenu;
