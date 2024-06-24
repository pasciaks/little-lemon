import React from "react";
import styles from "./FooterContacts.module.css";

const FooterContacts = () => (
  <div className={styles.FooterContacts}>
    <p>Contact</p>
    <ul>
      <li>
        <span>Address:</span> 220 N Green St, Chicago, IL 60607{" "}
      </li>
      <li>
        <span>Phone:</span> (312) 555-5555{" "}
      </li>
      <li>
        <span>Email:</span> info@littlelemon.com
      </li>
    </ul>
  </div>
);

FooterContacts.propTypes = {};

FooterContacts.defaultProps = {};

export default FooterContacts;
