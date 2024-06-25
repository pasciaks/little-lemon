import { useNavigate } from "react-router-dom";
import "./Hero.css";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <h1 tag="h1" size="2xl">
          Little Lemon
        </h1>
        <p className="subtitle s2">Chicago</p>
        <p className="s2" id="LL-Hero-desc">
          At Little Lemon, we bring you the vibrant flavors and warmth of the
          Mediterranean right to your table. Located in the heart of Chicago,
          our restaurant is a celebration of Mediterranean cuisine, known for
          its fresh ingredients, bold flavors, and rich culinary traditions.
        </p>
        <button
          ariaLabel="Reserve a Table"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate("/reservations")}
        >
          Reserve a Table
        </button>
      </div>
      <div className="LL-Hero-right">
        <img src={"../../../images/salad.jpg"} alt="Little Lemon - Hero" />
      </div>
    </section>
  );
};
