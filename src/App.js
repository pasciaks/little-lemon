import React from "react";
import "./App.css";

import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <React.Fragment className="App">
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main></main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
