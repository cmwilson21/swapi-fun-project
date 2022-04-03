import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PeopleCard = (person) => {
  // console.log("person", person);
  const home = person.person.homeworld;
  return (
    <div>
      <Card className="card" sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {person.person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.person.gender.charAt(0).toUpperCase() +
              person.person.gender.slice(1)}
            <br />
            {home}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
