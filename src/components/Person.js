import React from "react";

const Person = ({ person }) => {
  return (
    <li className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth Year - {person.birth_year}</p>
    </li>
  );
};

export default Person;
