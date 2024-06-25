import React from "react";
import ReservationForm from "../ReservationForm/ReservationForm";

import "./Reservation.css";

const Reservation = () => (
  <div className="Reservation">
    <h1>Reservations</h1>
    <ReservationForm />
  </div>
);

Reservation.propTypes = {};

Reservation.defaultProps = {};

export default Reservation;
