// App.test.js
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders the App component", async () => {
  render(<App />);
});

// NOTE: Although getting the following debug/error/warning, these tests work.

// console.error
// Warning: `ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.

// Test Suites: 2 passed, 2 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        1.311 s
// Ran all test suites related to changed files.
