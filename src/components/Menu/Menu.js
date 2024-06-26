import React from "react";
import "./Menu.css";
import FoodMenu from "../FoodMenu/FoodMenu";

const Menu = () => (
  <div className="Menu">
    <h1>Menu Component</h1>
    <section>
      <FoodMenu />
    </section>
  </div>
);

export default Menu;
