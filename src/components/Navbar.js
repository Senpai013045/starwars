import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <nav>
      <button className="navBtn" onClick={() => setPage("planets")}>
        Planets
      </button>
      <button className="navBtn" onClick={() => setPage("people")}>
        People
      </button>
    </nav>
  );
};

export default Navbar;
