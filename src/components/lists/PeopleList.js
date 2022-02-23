import { React, useEffect } from "react";
import { PeopleCard } from "../cards/PeopleCard";

export const PeopleList = () => {
  const swapiUrl = "https://swapi.dev/api/people/";

  // const swGetter = useEffect(() => {
  //   fetch(swapiUrl)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  // create a function that will fetch the data from the swapi url
  // and return the data as a json object
  const swGetter = () => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    swGetter();
  }, []);

  console.log("line 25", swGetter[1]);

  return (
    <div>
      People List
      <PeopleCard />
    </div>
  );
};

// export default PeopleList;
