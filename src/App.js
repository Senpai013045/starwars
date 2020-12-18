import React, { useState } from "react";
import Navbar from "./components/Navbar";
import People from "./components/People";
import Planets from "./components/Planets";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="app">
      <header>
        <h1 className="header1">Star Wars Info</h1>
        <Navbar setPage={setPage} />
      </header>
      <div className="content">
        {page === "planets" ? <Planets /> : <People />}
      </div>
    </div>
  );
}

export default App;
