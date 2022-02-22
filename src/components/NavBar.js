import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/planets">Planets</NavLink>
      <NavLink to="/starships">Starships</NavLink>
    </div>
  );
};

export default NavBar;
