import React from "react";
import { useReducer, useCallback, useState, useEffect } from "react";
import ReservationForm from "../ReservationForm/ReservationForm";
import { bookingFormReducer, loadInitialState } from "../../actions";

import "./Reservation.css";

const Reservation = (props) => {
  const [date, setDate] = useState(new Date());
  const [state, dispatch] = useReducer(
    bookingFormReducer,
    loadInitialState(date)
  );

  useEffect(() => {
    loadInitialState(date);
  }, [date]);

  console.log("availableTimes:", state.availableTimes);

  const removeTime = useCallback(
    (time, date) => {
      let availableTimes = state.availableTimes.filter((t) => t !== time);
      console.log(availableTimes);
      dispatch({
        type: "setAvailableTimes",
        payload: availableTimes,
      });
      console.log(state.availableTimes);
    },
    [state.availableTimes]
  );

  return (
    <div className="Reservation">
      <h1>Reservations</h1>
      <ReservationForm
        setDate={setDate}
        availableTimes={state.availableTimes}
        removeTime={removeTime}
      />
    </div>
  );
};

export default Reservation;
