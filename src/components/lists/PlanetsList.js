import { React, useEffect, useState } from "react";
import { PlanetCard } from "../cards/PlanetCard";

export const PlanetsList = () => {
  // set the planets state
  const [planets, setPlanets] = useState([]);

  // grab the planets from the api https://swapi.dev/api/planets/ and store it in a variable called planets
  const swapiUrl = "https://swapi.dev/api/planets/";

  // create a function that will fetch the data from the swapi url
  // and return the data as a json object
  const swGetterPlanets = () => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => setPlanets(data.results));
  };
  // console.log("planets", planets);

  useEffect(() => {
    swGetterPlanets();
  }, []);

  return (
    <div className="list">
      {planets.map((planet) => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </div>
  );
};
