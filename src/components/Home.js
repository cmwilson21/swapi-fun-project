import React from "react";

const Home = () => {
  return (
    <div>
      <h1
        style={{
          color: "gray",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",

          padding: 20,
        }}
      >
        Welcome to Swapi Fun!
      </h1>

      <img
        src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt="Lego Stormtrooper walking in sand"
      />

      <h2
        style={{
          color: "gray",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",

          padding: 20,
        }}
      >
        Where we have fun with Swapi
      </h2>
    </div>
  );
};

export default Home;
