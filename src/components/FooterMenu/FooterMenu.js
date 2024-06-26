import React from "react";
import styles from "./FooterMenu.module.css";
import { Link } from "react-router-dom";

const FooterMenu = () => (
  <div className={styles.FooterMenu}>
    <p>Menu</p>
    {/* <ul>
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
    </ul> */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/reservations">Reservations</Link>
      </li>
      <li>
        <Link to="/order-online">Order</Link>
      </li>
    </ul>
  </div>
);

export default FooterMenu;
