import React from "react";
import { movies } from "../data";

function MovieItem({ title, time, genres }) {
  return (
    <div className="movie">
      <h2>{title}</h2>
      <p>{time}</p>
      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <MovieItem key={index} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
