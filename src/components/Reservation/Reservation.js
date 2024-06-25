import React from "react";
import ReservationForm from "../ReservationForm/ReservationForm";

import "./Reservation.css";

const Reservation = () => (
  <div className="Reservation">
    <p>Reservations</p>
    <ReservationForm />
  </div>
);

Reservation.propTypes = {};

Reservation.defaultProps = {};

export default Reservation;
