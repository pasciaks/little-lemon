import React from "react";
import styles from "./Testimonials.module.css";
import CardGallery from "../CardGallery/CardGallery";

const Testimonials = () => (
  <div className={styles.Testimonials}>
    <h1>Testimonials</h1>

    <p>What our customers are saying</p>
    <CardGallery />
  </div>
);

export default Testimonials;
