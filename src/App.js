import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
  PeopleList,
  PlanetsList,
  StarshipsList,
} from "./components/lists/pages";
import { React, useEffect } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // fetch the api here in app.js and pass it in as props to the list components, then pass it in as props to the card components

  const swapiUrl = "https://swapi.dev/api/";

  useEffect(() => {
    fetch(swapiUrl)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeopleList />} />
        <Route path="/planets" element={<PlanetsList />} />
        <Route path="/starships" element={<StarshipsList />} />
      </Routes>
    </Router>
  );
}

export default App;
