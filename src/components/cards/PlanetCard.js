import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PlanetCard = (planet) => {
  // create a map to go through the residents array and return a div with the name of the resident
  const residentList = planet.planet.residents.map((resident) => {
    return <div>{resident}</div>;
  });

  return (
    <div>
      <h1>{planet.planet.name}</h1>
      <p>Climate: {planet.planet.climate}</p>
      <p>Terrain: {planet.planet.terrain}</p>
      <p>
        Population:{" "}
        {planet.planet.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
      <p>Gravity: {planet.planet.gravity}</p>
      <p>Residents: {residentList}</p>
    </div>
  );
};
