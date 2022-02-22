import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {
  PeopleList,
  PlanetsList,
  StarshipsList,
} from "./components/lists/pages";
import React from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
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
