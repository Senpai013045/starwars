import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const People = () => {
  const fetchPeople = async () => {
    const res = await fetch("https://swapi.dev/api/people");
    return res.json();
  };

  const { data, isError, isLoading, isSuccess } = useQuery(
    "people",
    fetchPeople
  );

  return (
    <div className="animationContainer2">
      <h2>People</h2>
      {isLoading && <div className="loading">Loading</div>}
      {isError && <div className="error">Error fetching data</div>}
      {isSuccess && (
        <ul className="dataContainer">
          {data.results.map((person) => (
            <Person person={person} key={person.name} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default People;
