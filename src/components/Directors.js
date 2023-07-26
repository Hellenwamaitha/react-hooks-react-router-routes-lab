import React from "react";
import { directors } from "../data";

function DirectorItem({ name, movies }) {
  return (
    <div className="director">
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <DirectorItem key={index} {...director} />
      ))}
    </div>
  );
}


export default Directors;
