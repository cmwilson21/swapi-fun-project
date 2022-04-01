import { React, useEffect, useState } from "react";
import { StarshipCard } from "../cards/StarshipCard";

export const StarshipsList = () => {
  const swapiUrl = "https://swapi.dev/api/starships/";
  const [starships, setStarships] = useState([]);

  const swGetterStarships = () => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => setStarships(data.results));
  };

  useEffect(() => {
    swGetterStarships();
  }, []);

  return (
    <div>
      StarshipsList
      {starships.map((starship) => (
        <StarshipCard key={starship.id} starship={starship} />
      ))}
    </div>
  );
};

// export default StarshipsList;
