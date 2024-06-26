import React from "react";
import ReservationForm from "../ReservationForm/ReservationForm";

import "./Reservation.css";

const Reservation = () => {
  // array of available times, every 30 minutes from 5pm to 10pm

  const availableTimes = [
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const removeTime = (time) => {
    const index = availableTimes.indexOf(time);
    availableTimes.splice(index, 1);
  };

  return (
    <div className="Reservation">
      <h1>Reservations</h1>
      <ReservationForm
        availableTimes={availableTimes}
        removeTime={removeTime}
      />
    </div>
  );
};

export default Reservation;
