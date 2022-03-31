import { React, useEffect, useState } from "react";
import { PlanetCard } from "../cards/PlanetCard";

export const PlanetsList = () => {
  // set the planets state
  const [planets, setPlanets] = useState([]);

  // grab the planets from the api https://swapi.dev/api/planets/ and store it in a variable called planets
  const swapiUrl = "https://swapi.dev/api/planets/";

  // create a function that will fetch the data from the swapi url
  // and return the data as a json object
  const swGetter = () => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  };

  useEffect(() => {
    swGetter();
  }, []);

  console.log("line 25", swGetter[1]);

  // map through the planets array and return a div with the name of the planet
  planets.map((planet) => {
    return <div>{planet.name}</div>;
  });

  return (
    <div>
      PlanetsList
      {PlanetCard}
    </div>
  );
};

// export default PlanetsList;
