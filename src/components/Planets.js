import React from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch("https://swapi.dev/api/planets");
    return res.json();
  };

  const { data, isError, isLoading, isSuccess } = useQuery(
    "planets",
    fetchPlanets
  );

  return (
    <>
      <h2>Planets</h2>
      {isLoading && <div className="loading">Loading</div>}
      {isError && <div className="error">Error fetching data</div>}
      {isSuccess && (
        <ul className="dataContainer">
          {data.results.map((planet) => (
            <Planet planet={planet} key={planet.name} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Planets;
