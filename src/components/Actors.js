import React from "react";
import { actors } from "../data";

function ActorItem({ name, movies }) {
  return (
    <div className="actor">
      <h2>{name}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  );
}

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <ActorItem key={index} {...actor} />
      ))}
    </div>
  );
}

export default Actors;

