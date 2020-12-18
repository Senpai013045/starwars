import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";
import { CSSTransition } from "react-transition-group";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="app">
      <header>
        <h1 className="header1">Star Wars Info</h1>
        <Navbar setPage={setPage} />
      </header>
      <div className="content">
        <CSSTransition
          key="first"
          in={page === "planets"}
          mountOnEnter
          unmountOnExit
          timeout={500}
          classNames="left"
        >
          <Planets />
        </CSSTransition>

        <CSSTransition
          key="second"
          in={page === "people"}
          mountOnEnter
          unmountOnExit
          timeout={500}
          classNames="right"
        >
          <People />
        </CSSTransition>
      </div>
    </div>
  );
}

export default App;
