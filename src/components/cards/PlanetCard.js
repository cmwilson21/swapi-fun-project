import React from "react";

export const PlanetCard = (planet) => {
  console.log("planet card", planet);
  return (
    <div>
      PlanetCard
      <h1>{planet.name}</h1>
    </div>
  );
};
