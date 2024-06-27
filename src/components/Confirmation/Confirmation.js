import React from "react";
import { useReducer, useCallback, useState, useEffect } from "react";
import ReservationForm from "../ReservationForm/ReservationForm";
import { bookingFormReducer, loadInitialState } from "../../actions";

import "./Confirmation.css";

const Confirmation = (props) => {
  const [state, dispatch] = useReducer(
    bookingFormReducer,
    loadInitialState(new Date())
  );

  return (
    <div className="Confirmation">
      <h1>Confirmation Component</h1>
      {JSON.stringify(state)}
    </div>
  );
};

export default Confirmation;
