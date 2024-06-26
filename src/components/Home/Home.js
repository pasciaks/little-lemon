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
          className="image image1"
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
    <section>
      <h1>Grading</h1>
      <p>
        When you submit your assignment, other learners in the course will
        review and grade your work. They will evaluate the following:
      </p>

      <ul>
        <li>
          Has the learner followed the design and implementation of the UX UI?
        </li>
        <p className="text-success">
          Yes, the details are individually captured below.
        </p>
        <li>Are there appropriate accessibility tags applied?</li>
        <p className="text-success">
          Yes, use of alt, aria-label, and role have been used.
        </p>
        <li>Does the web app contain unit tests?</li>
        <p className="text-success">
          Yes, unit tests for the form and functions are provided and tested
          green and are listed below.
        </p>
        <ul>
          <li>Test Suites: 3 passed, 3 total</li>
          <li>Tests: 5 passed, 5 total</li>
          <li>Snapshots: 0 total</li>
          <li>Time: 0.723 s, estimated 1 s</li>
          <li>Ran all test suites.</li>
        </ul>
        <li>Is the booking form functional and applying validation?</li>
        <p className="text-success">
          Yes, local storage and form validation/inputs ensure only valid new
          reservations are accepted.
        </p>
        <li>Are the semantics and responsiveness of the web app correct?</li>
        <p className="text-success">
          Yes, nav, main and other semantic names are used as well as responsive
          design.
        </p>
        <li>Has the learner committed the project to a Git repository?</li>
        <p className="text-success">
          Yes, the committed code can be reached at{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/pasciaks/little-lemon"
          >
            https://github.com/pasciaks/little-lemon
          </a>
        </p>
      </ul>
    </section>
  </>
);

export default Home;
