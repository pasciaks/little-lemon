import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import FoodMenu from "../FoodMenu/FoodMenu";

const Home = () => (
  <>
    <Hero />

    <section className="info2">
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        At Little Lemon, we bring you the vibrant flavors and warmth of the
        Mediterranean right to your table. Located in the heart of Chicago, our
        restaurant is a celebration of Mediterranean cuisine, known for its
        fresh ingredients, bold flavors, and rich culinary traditions.
      </p>
    </section>
    <section className="info">
      <div className="image-container">
        <img
          src={"../../../images/mario-adrian-1.jpg"}
          alt="mario 1"
          class="image image1"
        />
      </div>
    </section>
    <section>
      <h1>Specials</h1>
      <FoodMenu />
    </section>
    <section>
      <Testimonials />
    </section>
  </>
);
Home.propTypes = {};

Home.defaultProps = {};

export default Home;
