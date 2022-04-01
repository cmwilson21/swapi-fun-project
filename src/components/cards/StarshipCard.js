import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const StarshipCard = (starship) => {
  return (
    <div>
      <h2>{starship.starship.name}</h2>
      <p>Starship Class: {starship.starship.starship_class}</p>
      <p>Crew Capacity: {starship.starship.crew}</p>
      <p>Passenger Capacity: {starship.starship.passengers}</p>
      <p>Hyperdrive Rating: {starship.starship.hyperdrive_rating}</p>
      <p>Manufacturer: {starship.starship.manufacturer}</p>
      <p>
        Credits:{" "}
        {starship.starship.cost_in_credits
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </p>
    </div>
  );
};
