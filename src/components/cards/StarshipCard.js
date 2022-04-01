import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const StarshipCard = (starship) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {starship.starship.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Starship Class: {starship.starship.starship_class}
            <br />
            Crew Capacity: {starship.starship.crew}
            <br />
            Passenger Capacity: {starship.starship.passengers}
            <br />
            Hyperdrive Rating: {starship.starship.hyperdrive_rating}
            <br />
            Manufacturer: {starship.starship.manufacturer}
            <br />
            Credits:{" "}
            {starship.starship.cost_in_credits
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
