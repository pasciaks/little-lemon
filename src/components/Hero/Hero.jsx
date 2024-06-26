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
          Mediterranean right to your table.
        </p>
        <button
          aria-label="Reserve a Table"
          id="LL-Hero-btn"
          onClick={() => navigate("/reservations")}
          className="btn-primary-style"
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
