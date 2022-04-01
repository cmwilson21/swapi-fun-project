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
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {planet.planet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Climate: {planet.planet.climate}
            <br />
            Terrain: {planet.planet.terrain}
            <br />
            Population:{" "}
            {planet.planet.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            <br />
            Gravity: {planet.planet.gravity}
            <br />
            Residents: {residentList}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
