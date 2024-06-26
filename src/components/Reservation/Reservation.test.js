// Reservation.test.js
import React from "react";
import { render } from "@testing-library/react";
import Reservation from "./Reservation";

import { loadInitialState, bookingFormReducer } from "../../actions";

test("renders the Reservation component", async () => {
  render(<Reservation />);
});

test("load initial state works", async () => {
  console.log(loadInitialState(new Date()));

  let arrayOfTimes = loadInitialState(new Date()).availableTimes;
  expect(arrayOfTimes).toBeDefined();
});

test("update available times in state works", async () => {
  console.log(loadInitialState(new Date()));

  let arrayOfTimes = loadInitialState(new Date()).availableTimes;
  arrayOfTimes = bookingFormReducer(arrayOfTimes, {
    type: "setAvailableTimes",
    payload: [
      "1730",
      "1800",
      "1830",
      "1900",
      "1930",
      "2000",
      "2030",
      "2100",
      "2130",
      "2200",
    ],
  })["availableTimes"];
  expect(arrayOfTimes).toBeDefined();
  expect(arrayOfTimes).toHaveLength(10);
});

// NOTE: Although getting the following debug/error/warning, these tests work.

// console.error
// Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.
