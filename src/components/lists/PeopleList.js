import { React, useEffect, useState } from "react";
import { PeopleCard } from "../cards/PeopleCard";

export const PeopleList = () => {
  const swapiUrl = "https://swapi.dev/api/people/";
  const [people, setPeople] = useState([]);

  const swGetterPeople = () => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => setPeople(data.results));
  };

  useEffect(() => {
    swGetterPeople();
  }, []);

  return (
    <div>
      {people.map((person) => (
        <PeopleCard key={person.id} person={person} />
      ))}
    </div>
  );
};

// export default PeopleList;
